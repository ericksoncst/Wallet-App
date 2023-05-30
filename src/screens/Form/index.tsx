import  React, {useCallback, useState, useRef, useEffect} from 'react';
import { useFormik } from 'formik'
import {
  Linking,
  Alert,
} from 'react-native';
import  { Masks } from 'react-native-mask-input';
import TextRecognition from 'react-native-text-recognition';
import {
  Camera,
  CameraPermissionRequestResult,
  useCameraDevices,
} from 'react-native-vision-camera';
import { useQueryClient } from 'react-query'
import { RootStackParamList } from '../../routes/root.routes';
import BgWrapper from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addCard } from '../../services';
import { RowContainer, Title, IconContainer, Wrapper } from './styles';
import validationSchema from './validation';
import { AxiosResponse } from 'axios';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ScreenWrapper from '../../components/ScreenWrapper';
import { MyCamera } from './Camera';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


type Props = StackNavigationProp<RootStackParamList, 'Form'>;

interface IForm {
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;

}

interface CardResponse extends AxiosResponse {
  data: {
    cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;
  }

}


function Form() {

  const navigation = useNavigation<Props>()

  const queryClient = useQueryClient();
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices?.back;
  const [hasPermissions, setHasPermissions] = useState<boolean>(false);
  const [openCamera, setOpenCamera] = useState<boolean>(false);



  const formik = useFormik<IForm>({
    initialValues: {
      cardNumber: '',
      cardCvv: '',
      cardName: '',
      cardExpiration: '',
  
    },


    onSubmit: async (data: IForm) => {
      const response: CardResponse = await addCard(data)
      if(response?.data) {
        await queryClient.invalidateQueries(['cards'])
        navigation.navigate('CardSaved', { cardData: response?.data })
        formik.resetForm({})
      }
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnMount: false,
  })



  const { values, setFieldValue, handleSubmit, errors, touched, setFieldTouched } =  formik

  async function handleChange(field: string,text: string) {
    void setFieldTouched(field)
    await setFieldValue(field, text.toString())
  }

  const findCardNumberInArray:  (arr: string[]) => string = arr => {
    let creditCardNumber = '';
    arr.forEach(e => {
      const numericValues = e.replace(/\D/g, '');
      const creditCardRegex =
        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      if (creditCardRegex.test(numericValues)) {
        creditCardNumber = numericValues;
        return;
      }
    });
    
    void setFieldValue('cardNumber', creditCardNumber);
    void setOpenCamera(false)
    return creditCardNumber;
  };

  const captureAndRecognize = useCallback(async () => {
    const image = await camera.current?.takePhoto({
      qualityPrioritization: 'quality',
      enableAutoStabilization: true,
      skipMetadata: true,
    });
    const result: string[] = await TextRecognition.recognize(
        image?.path as string,
    );
      
    return findCardNumberInArray(result) 
    
  }, []);
  

  async function getPermission(): Promise<void> {
    const cameraPermission: CameraPermissionRequestResult =
      await Camera.requestCameraPermission()
   
    if (cameraPermission === 'denied') {
      Alert.alert(
        'Aceitar permissões',
        'Nos forneça permissões para utilizar sua camera',
        [
          {
            text: 'Sim',
            onPress: () => {
              void Linking.openSettings()
            },
          },
          {
            text: 'Cancel',
          },
        ],
      );
      setHasPermissions(false);
    } else {
      setHasPermissions(true);
    }
  }

  useEffect(() => {
    void getPermission()
  }, []);

  return (
    <BgWrapper>
      <ScreenWrapper>
        <Title>Wallet test</Title>
        {device && hasPermissions && openCamera ? <MyCamera 
          active={openCamera} 
          ref={camera} 
          onHandlePress={() => void captureAndRecognize()}
          onHandleClose={()=> setOpenCamera(false)}
          device={device}
        /> : null}

        <Wrapper>
          <IconContainer  onPress={
            () => setOpenCamera(!openCamera)
          }>
            <Icon name='camera' size={22} color='#FFF' />
          </IconContainer>
          <Input
            testID='cNumber'
            withIcon
            color='#BBBBBB'
            keyboardType='numeric'
            handleChange={ (text: string) => void handleChange('cardNumber',text)}
            value={values.cardNumber} 
            label='número do cartão'
            mask={Masks.CREDIT_CARD}
            error={errors.cardNumber}
            touched={touched.cardNumber}

          />
        </Wrapper>
          
        <Input 
          testID='cName'
          handleChange={ (text: string) => void handleChange('cardName',text)}
          value={values.cardName} 
          label='nome do titular do cartão'
          error={errors.cardName}
          touched={touched.cardName}
        />
        <RowContainer>
          <Input 
            testID='cExpiration'
            width='45'
            keyboardType='numeric'
            handleChange={ (text: string) => {
              void handleChange('cardExpiration',text)
            }}
            value={values.cardExpiration} 
            label='vencimento'
            placeholder='00/00'
            mask={[/[0-1]/, /[0-9]/, '/', /[2-3]/, /[0-9]/]}
            error={errors.cardExpiration}
            touched={touched.cardExpiration}

            
          />
          <Input 
            testID='cCvv'
            width='45'
            keyboardType='numeric'
            handleChange={ (text: string) => void handleChange('cardCvv',text)}
            value={values.cardCvv} 
            label='código de segurança'
            placeholder='***'
            obfuscationCharacter='*'
            error={errors.cardCvv}
            touched={touched.cardCvv}

          />
        </RowContainer>
        <Button 
          title='avançar' 
          handlePress={()=> handleSubmit()} 
          color='#FFF' 
          textColor='#000' 
          disabled={false}/>
      </ScreenWrapper>
    </BgWrapper>
  );
}

export default Form
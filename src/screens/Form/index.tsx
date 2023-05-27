import * as React from 'react';
import { useFormik } from 'formik'
import  { Masks } from 'react-native-mask-input';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import BgWrapper from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addCard } from '../../services';
import { RowContainer } from './styles';
import validationSchema from './validation';

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;

interface IForm {
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;

}


function Form({ navigation }: Props) {

  const formik = useFormik<IForm>({
    initialValues: {
      cardNumber: '',
      cardCvv: '',
      cardName: '',
      cardExpiration: '',
  
    },
    onSubmit: async (data: IForm) => await addCard(data),
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
  })



  const { values, setFieldValue, handleSubmit, errors } =  formik

  async function handleChange(field: string,text: string) {
    await setFieldValue(field, text.toString())
  }

  return (
    <BgWrapper>
      <React.Fragment>
        <Input 
          keyboardType='numeric'
          handleChange={ (text) => void handleChange('cardNumber',text)}
          value={values.cardNumber} 
          label='número do cartão'
          mask={Masks.CREDIT_CARD}
        />
          
        <Input 
          handleChange={ (text) => void handleChange('cardName',text)}
          value={values.cardName} 
          label='nome do titular do cartão' />
        <RowContainer>
          <Input 
            keyboardType='numeric'
            handleChange={ (text) => {
              console.log(text)
              void handleChange('cardExpiration',text)
            }}
            value={values.cardExpiration} 
            label='vencimento'
            placeholder='00/00'
            mask={[/[0-1]/, /[0-9]/, '/', /[2-3]/, /[0-9]/]}
            
          />
          <Input 
            keyboardType='numeric'
            handleChange={ (text) => void handleChange('cardCvv',text)}
            value={values.cardCvv} 
            label='código de segurança'
            placeholder='***'
          />
        </RowContainer>
        <Button 
          title='avançar' 
          handlePress={()=> handleSubmit()} 
          color='#FFF' 
          textColor='#000' 
          disabled={false}/>
      </React.Fragment>
    </BgWrapper>
  );
}

export default Form
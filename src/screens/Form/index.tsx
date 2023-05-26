import * as React from 'react';
import { useFormik } from 'formik'

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import BgWrapper from '../../components/Background';
import MaskInput from 'react-native-mask-input';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;

interface IForm {
  cardNumber: string;
  name: string;
  cardCvv: string;
  cardExpiration: string;

}


function Form({ navigation }: Props) {

  const formik = useFormik<IForm>({
    initialValues: {
      cardNumber: '',
      cardCvv: '',
      name: '',
      cardExpiration: '',
  
    },
    onSubmit: (data) => console.log(data),
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
  })



  const { values, setFieldValue, handleSubmit } =  formik

  async function handleChange(field: string,text: string) {
    await setFieldValue(field, text)
  }

  return (
    <BgWrapper>
      <React.Fragment>
        <MaskInput style={{
          backgroundColor: '#FFF',
          height: 45,
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 6,
          paddingLeft: 16,
          fontSize: 16
        }} 
        keyboardType='numeric'
        onChangeText={ text => void handleChange('cardNumber',text.toString())}
        value={values.cardNumber} 
        placeholder='Número do cartào' />
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
import * as React from 'react';
import { useFormik } from 'formik'

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import BgWrapper from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addCard } from '../../services';

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
        <Input 
          keyboardType='numeric'
          handleChange={ (text) => void handleChange('cardNumber',text.toString())}
          value={values.cardNumber} 
          placeholder='Número do cartào' />
        <Input 
          handleChange={ (text) => void handleChange('cardName',text.toString())}
          value={values.cardName} 
          placeholder='Nome do Titular do cartão' />
        <Input 
          handleChange={ (text) => void handleChange('cardExpiration',text.toString())}
          value={values.cardExpiration} 
          placeholder='Vencimento' />
        <Input 
          keyboardType='numeric'
          handleChange={ (text) => void handleChange('cardCvv',text.toString())}
          value={values.cardCvv} 
          placeholder='Cvv' />
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
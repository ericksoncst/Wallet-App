import * as Yup from 'yup';
import valid from 'card-validator';


const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().test(
    'test-number',
    'Credit Card number is invalid',
    value => valid.number(value).isValid
  ).required('Preencher um cartão válido'),
  cardName: Yup.string().min(5).required('Preencher nome do titular'),
  cardCvv: Yup.string().min(3).max(4).test(value => valid.cvv(value).isValid)
    .required('Código inválido'),
});

export default validationSchema;
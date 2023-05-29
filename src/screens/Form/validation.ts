import * as Yup from 'yup';
import valid from 'card-validator';

interface IForm {
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;

}


const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
  cardNumber: Yup.string().test(
    'test-number',
    'Credit Card number is invalid',
    value => valid.number(value).isValid
  ).required('Preencher um cartão válido'),
  cardName: Yup.string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Caracteres inválidos.'
    )
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms,'Favor informar nome completo.')
    .required('Preencher nome do titular'),
  cardCvv: Yup.string().min(3).max(4).test(value => valid.cvv(value).isValid)
    .required('Código inválido'),
  cardExpiration: Yup.string().test(
    'test-credit-card-expiration-date',
    'Data inválida',
    expirationDate => {
      if (!expirationDate) {
        return false
      }

      const today = new Date()
      const monthToday = today.getMonth() + 1
      const yearToday = today
        .getFullYear()
        .toString()
        .substr(-2)

      const [expMonth, expYear] = expirationDate.split('/')

      if (Number(expYear) < Number(yearToday)) {
        return false
      } else if (
        Number(expMonth) < monthToday &&
        Number(expYear) <= Number(yearToday)
      ) {
        return false
      }

      return true
    }
  )
    .test(
      'test-credit-card-expiration-date',
      'Mês inválido',
      expirationDate => {
        if (!expirationDate) {
          return false
        }

        const [expMonth] = expirationDate.split('/')

        if (Number(expMonth) > 12) {
          return false
        }

        return true
      }
    ).required('Data de expiração obrigatório')
  
});

export default validationSchema;
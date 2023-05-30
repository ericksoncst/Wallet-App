import axios from 'axios';

type Card = {
    id: string;
    cardNumber: string;
    cardName: string;
    cardCvv: string;
    cardExpiration: string;
  }

  type CardForm = {
    cardCvv: string ;
    cardName : string;
    cardNumber : string;
    cardExpiration : string;

  }

type CardsResponse = {
    data: Card[]
  }
  
  
export const getAllCards = async () => {
  const response: CardsResponse = await axios.get('http://192.168.0.40:3000/cards')
  return response.data;
}

export const addCard = async (data: CardForm) => {
  const response = await axios.post('http://192.168.0.40:3000/cards', data)
  console.log(response)
  return response;
}
import axios from 'axios';
import Config from 'react-native-config';



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

console.log(`${Config.API_URL}/cards`)
  
export const getAllCards = async () => {
  const response: CardsResponse = await axios.get(`${Config.API_URL}/cards`)
  return response.data;
}

export const addCard = async (data: CardForm) => {
  const { data: res }: {
    data: Card
  } = await axios.post(`${Config.API_URL}/cards`, data)
  return res;
}

export const getCardById = async (id: string) => {
  const { data }: {
    data: Card
  } = await axios.get(`${Config.API_URL}/cards/${id}`)
  return data;
}
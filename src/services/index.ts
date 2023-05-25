import axios from 'axios';

type Card = {
    cvv: string ;
    id: string ;
    name : string;
    number : string;
  }

type CardsResponse = {
    data: Card[]
  }
  
  
export const getAllCards = async () => {
  const response: CardsResponse = await axios.get('http://192.168.0.40:3000/cards')
  return response.data;
}
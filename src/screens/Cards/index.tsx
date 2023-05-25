import * as React from 'react';
import {
  useQuery,
} from 'react-query'
import BgWrapper from '../../components/Background';
import { getAllCards } from '../../services';
import { CardItem, CardInfo, CardTitle, List, ListContainer } from './style';

type Card = {
  cvv: string ;
  id: string ;
  name : string;
  number : string;
  expiration: string;
}


function Cards() {

  
  const { data: cards, isLoading } = useQuery('cards', async () => {
    const response = await getAllCards();
    return response;
  }, {refetchOnWindowFocus: false});

  function maskCreditCard(card: string) {
    const maskedCard = '**** **** **** '+card.substr(-4);
    return maskedCard;
      
  }

  
  if (isLoading) return <CardInfo>{'Loading...'}</CardInfo>
  console.log(cards)


  return (
    <BgWrapper>
      <ListContainer>
        <List  data={cards} renderItem={({item} :{ item: Card } ) => {
          return (
            <CardItem>
              <CardTitle>White Card</CardTitle>
              <CardInfo height={18}> {item.name}</CardInfo>
              <CardInfo > {maskCreditCard(item.number)}</CardInfo>
              <CardInfo>Validade {item.expiration}</CardInfo>
            </CardItem>
          )
        }}
        />
      </ListContainer>
    </BgWrapper>
  );
}

export default Cards

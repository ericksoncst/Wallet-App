import * as React from 'react';
import {
  useQuery,
} from 'react-query'
import { AxiosResponse } from 'axios';
import BgWrapper from '../../components/Background';
import TabScreen from '../../components/Tab';
import { getAllCards } from '../../services';
import { CardItem, CardInfo, CardTitle, List, ListContainer } from './style';

interface Card {
  id: string;
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;

}

interface CardResponse  {
  data: [
    {
      id: string;
      cardNumber: string;
      cardName: string;
      cardCvv: string;
      cardExpiration: string;
    }
  ]
}


function Cards() {

  
  const { data: cards, isLoading } = useQuery('cards', async () => {
    const response: CardResponse = await getAllCards();
    return response;
  }, {staleTime: 1000 * 60});

  function maskCreditCard(card: string) {
    const maskedCard = '**** **** **** '+card?.substr(-4);
    return maskedCard;
      
  }

  
  if (isLoading) return <CardInfo>{'Loading...'}</CardInfo>
  console.log(cards)


  return (
    <BgWrapper>
      <React.Fragment>
        <TabScreen />
        <ListContainer>
          <List  
            data={cards} 
            keyExtractor={(item: Card) => item.id}
            renderItem={({item}: {item: Card}) => {
              return (
                <CardItem>
                  <CardTitle>White Card</CardTitle>
                  <CardInfo height={18}> {item.cardName}</CardInfo>
                  <CardInfo > {maskCreditCard(item.cardNumber)}</CardInfo>
                  <CardInfo>Validade {item.cardExpiration}</CardInfo>
                </CardItem>
              )
            }}
          />
        </ListContainer>
      </React.Fragment>
    </BgWrapper>
  );
}

export default Cards

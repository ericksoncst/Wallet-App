import * as React from 'react';
import {
  useQuery,
} from 'react-query'
import BgWrapper from '../../components/Background';
import { getAllCards } from '../../services';
import { CardItem, CardInfo, CardTitle, List, ListContainer, Tab, TabTitle } from './style';

interface Card {
  id: string;
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;

}


function Cards() {

  
  const { data: cards, isLoading } = useQuery('cards', async () => {
    const response = await getAllCards();
    return response;
  }, {refetchOnWindowFocus: false});

  function maskCreditCard(card: string) {
    const maskedCard = '**** **** **** '+card?.substr(-4);
    return maskedCard;
      
  }

  
  if (isLoading) return <CardInfo>{'Loading...'}</CardInfo>
  console.log(cards)


  return (
    <BgWrapper>
      <React.Fragment>
        <Tab>
          <TabTitle>Meus cartões</TabTitle>
        </Tab>
        <ListContainer>
          <List  data={cards} renderItem={({item} :{ item: Card } ) => {
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

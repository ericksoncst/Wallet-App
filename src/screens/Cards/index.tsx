import * as React from 'react';
import {Text} from 'react-native'
import {
  useQuery,
} from 'react-query'
import BgWrapper from '../../components/Background';
import TabScreen from '../../components/Tab';
import { getAllCards } from '../../services';
import { CardList } from './CardList';
import {  ListContainer } from './style';

interface Card {
  id: string;
  cardNumber: string;
  cardName: string;
  cardCvv: string;
  cardExpiration: string;
}

function Cards() {


  const { data: cards, isLoading } = useQuery('cards', async () : Promise<Card[]> => {
    const response = await getAllCards();
    return response;
  }, {staleTime: 1000 * 60});

  
  if (isLoading) return <Text>{'Loading...'}</Text>
  console.log(cards)


  return (
    <BgWrapper>
      <React.Fragment>
        <TabScreen />
        <ListContainer>
          <CardList cards={cards} />
        </ListContainer>
      </React.Fragment>
    </BgWrapper>
  );
}

export default Cards

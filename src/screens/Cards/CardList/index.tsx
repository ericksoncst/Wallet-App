import React from 'react';
import { maskCreditCard } from '../../../helpers';
import { List, CardItem, CardTitle, CardInfo  } from './style';


interface Card {
    id: string;
    cardNumber: string;
    cardName: string;
    cardCvv: string;
    cardExpiration: string;
  
  }

interface Props {
  cards?: Card[] | []
}

export function CardList(props: Props) {

  const { cards } = props
  return (
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
  )
}
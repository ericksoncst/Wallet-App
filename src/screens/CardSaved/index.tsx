import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/root.routes';
import { CardItem, CardTitle, CardInfo, Title, Message } from './style'
import BgWrapper from '../../components/Background';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { maskCreditCard } from '../../helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'CardSaved'>;



function CardSaved({navigation, route}: Props) {
  const cardData  = route.params.cardData;

  return (
    <BgWrapper>
      <ScreenWrapper>
        <Title>Wallet test</Title>
        <Message>cartão cadastrado com sucesso</Message>
        <CardItem>
          <CardTitle>White Card</CardTitle>
          <CardInfo height={18}> {cardData.cardName}</CardInfo>
          <CardInfo>{maskCreditCard(cardData.cardNumber)}</CardInfo>
          <CardInfo>Validade {cardData.cardExpiration}</CardInfo>
        </CardItem>
        <Button
          title="avançar"
          handlePress={() => navigation.navigate('Cards')}
          color='#12C2E9' 
          textColor='#FFF'
          disabled={false}
        />
      </ScreenWrapper>      
    </BgWrapper>
  );
}

export default CardSaved
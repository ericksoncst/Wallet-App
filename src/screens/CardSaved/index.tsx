import React from 'react';
import { RootStackParamList } from '../../routes/root.routes';
import { CardItem, CardTitle, CardInfo, Title, Message } from './style'
import BgWrapper from '../../components/Background';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { maskCreditCard } from '../../helpers';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';



function CardSaved() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CardSaved'>>();
  const cardData = useRoute<RouteProp<RootStackParamList, 'CardSaved'>>().params.cardData;
  
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
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Card {
    id: string;
    cardNumber: string;
    cardName: string;
    cardCvv: string;
    cardExpiration: string;
  
  }


export const List = styled(FlatList as new () => FlatList<Card>).attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }  
})``

export const CardItem = styled.View`
    width: 300px;
    height: 180px;
    border-radius: 16px;
    background-color: #FFF;
    padding-left: 15px;
    justify-content: center;

`

export const CardInfo = styled.Text<{height?: number}>`
  height:${props => `${props.height || 16}px`};
  font-weight: 400;
`

export const CardTitle =  styled.Text`
  height: 20px;
  font-weight: 400;
  margin-bottom: 30px;
`
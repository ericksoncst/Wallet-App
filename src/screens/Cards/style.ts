import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const ListContainer = styled.View`
  justify-content: center;
`

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }  
})`

`

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

export const Tab = styled.View`
  background-color: #FFF;
  height: 70px;
  flex-direction: row;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const TabTitle = styled.Text`
  font-size: 20px;
  color: #12C2E9;
`


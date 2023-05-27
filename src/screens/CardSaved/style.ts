import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 28px;
  color: #FFF;
  text-align: center;

`
export const Message = styled.Text`
  font-size: 20px;
  color: #FFF;
  text-align: center;
  margin-bottom: 30px;

`

export const CardItem = styled.View`
    height: 180px;
    border-radius: 16px;
    background-color: #FFF;
    padding-left: 15px;
    justify-content: center;
    margin-bottom: 30px;

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


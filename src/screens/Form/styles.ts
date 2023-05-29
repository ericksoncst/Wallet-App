import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 28px;
  color: #FFF;
  text-align: center;

`

export const RowContainer = styled.View`
    flex-direction: row;
    margin: 0px 0px 16px 0px;
    justify-content: space-between;
`

export const IconContainer = styled.Pressable`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #12C2E9;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 55px;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  `
  
export const Wrapper = styled.View`
  flex-direction: row;
`
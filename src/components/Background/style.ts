import styled from 'styled-components/native'

export const Container = styled.View`
background-color: #142995;
 justify-content: center;
 flex: 1;
`

export const CornerTop = styled.View.attrs({
  transform: [{ rotate: '-25deg'}]
})`
    width: 349.21px;
    height: 235.27px;
    background: #EEEEEE;
    opacity: 0.2;
    border-radius: 50px;
    top: -120px;
    right: 102px;
    position: absolute;
`

export const CornerBottom = styled.View.attrs({
  transform: [{ rotate: '-25deg'}]
})`
      width: 349.21px;
      height: 235.27px;
      background: #EEEEEE;
      opacity: 0.2;
      border-radius: 50px;
      bottom: -120px;
      left: 102px;
      position: absolute;
  `
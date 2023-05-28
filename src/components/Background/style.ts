import styled, {css} from 'styled-components/native'

const cornerTop = css`
  width: 349.21px;
  height: 235.27px;
  background: #EEEEEE;
  opacity: 0.2;
  border-radius: 50px;
  position: absolute;
  right: 125px;
  top: -120px;
`

const cornerBottom = css`
  width: 349.21px;
  height: 235.27px;
  background: #EEEEEE;
  opacity: 0.2;
  border-radius: 50px;
  position: absolute;
  left: 125px;
  bottom: -120px;
`

export const Container = styled.View`
  background-color: #142995;
  justify-content: center;
  flex: 1;
`

export const CornerTop = styled.View.attrs({
  transform: 
  [
    {rotate: '-25deg'},
  ]
})`
  ${cornerTop}
`

export const CornerBottom = styled.View.attrs({
  transform: 
  [
    {rotate: '-30deg'},
  ]
})`
  ${cornerBottom}
  `
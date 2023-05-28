import styled from 'styled-components/native'
import MaskInput from 'react-native-mask-input'

export const InputContainer = styled.View<{width?:string}>`
  width: ${props => `${props.width || 100}%`};
`


export const StyledInput = styled(MaskInput).attrs(
  {
    backgroundColor: '#FFF',
    height: 45,
    borderRadius: 6,
    paddingLeft: 16,
    fontSize: 16
  }
)``

export const InputLabel = styled.Text<{color?: string}>`
  margin: 22px 0px 4px 0px;
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.color || '#FFF'};
  white-space: nowrap;
`
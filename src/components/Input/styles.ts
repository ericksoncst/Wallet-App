import styled from 'styled-components/native'
import MaskInput from 'react-native-mask-input'

export const InputContainer = styled.View`

`


export const StyledInput = styled(MaskInput).attrs(
  {
    backgroundColor: '#FFF',
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 6,
    paddingLeft: 16,
    fontSize: 16
  }
)``

export const InputLabel = styled.Text`
  margin: 22px 0px 4px 30px;
  font-weight: 400;
  font-size: 16px;
  color: #BBBBBB;
`
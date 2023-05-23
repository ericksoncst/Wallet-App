import styled from 'styled-components/native'

export const StyledButton = styled.Pressable<{ color: string }>`
    border-radius: 12px;
    height: 55px;
    width: 300px;
    backgroundColor: ${props => props.color}
    margin: 0px 30px;
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text<{textColor: string}>`
    color: ${props => props.textColor || '#FFF'}
`

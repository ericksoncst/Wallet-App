import styled from 'styled-components/native'

export const StyledButton = styled.Pressable<{ color: string }>`
    border-radius: 12px;
    height: 55px;
    backgroundColor: ${props => props.color}
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px
`

export const ButtonText = styled.Text<{textColor: string}>`
    color: ${props => props.textColor || '#FFF'}
`

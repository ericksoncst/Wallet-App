import styled from 'styled-components/native';

export const Container = styled.TouchableWithoutFeedback`
    width: 20px,
    display: flex,
    align-tems: center,
`

export const IconContainer = styled.View<{marginTop: number}>`
    padding: 0px 30px;
    margin-top: ${props => `${props.marginTop  || 0}px`}
    height: 100%;
    justify-content: center;
`
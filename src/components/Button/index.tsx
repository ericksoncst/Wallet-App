import React from 'react'
import { ButtonText, StyledButton } from './style'


interface ButtonProps {
  color: string;
  title: string;
  disabled: boolean | false;
  textColor: string;
  handlePress: ()=> void;
}

function Button(props: ButtonProps) {
  const {title, handlePress, color, disabled, textColor } = props;


  return <StyledButton 
    disabled={disabled} 
    color={color} 
    onPress={handlePress}>
    <ButtonText textColor={textColor}>{title}</ButtonText>
  </StyledButton>
  
}

export default Button
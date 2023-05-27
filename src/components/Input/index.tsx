import React from 'react'
import {  MaskInputProps } from 'react-native-mask-input';
import { InputContainer, InputLabel, StyledInput } from './styles';

interface InputProps extends MaskInputProps {
    handleChange : (field: string, text: string)=> void,
    width?: string;
    label: string;
}

function Input(props: InputProps) {
  const { handleChange, value, placeholder, keyboardType, width, label, mask } = props;

  return (
    <InputContainer width={width}>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        keyboardType={keyboardType}
        onChangeText={handleChange}
        value={value} 
        placeholder={placeholder} 
        mask={mask}
      />
    </InputContainer>
  )
}

export default Input
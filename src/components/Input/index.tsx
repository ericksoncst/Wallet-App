import React from 'react'
import {  MaskInputProps } from 'react-native-mask-input';
import { InputContainer, InputLabel, StyledInput } from './styles';

interface InputProps extends MaskInputProps {
    handleChange : (field: string, text: string)=> void,
    width?: string;
    label: string;
    color?: string;
    withIcon?: boolean | false;
}

function Input(props: InputProps) {
  const { 
    handleChange, 
    value, 
    placeholder, 
    keyboardType, 
    width, 
    label, 
    mask, 
    color, 
    withIcon
  } = props;


  return (
    <InputContainer width={width} >
      <InputLabel color={color}>{label}</InputLabel>
      <StyledInput
        withIcon={withIcon}
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
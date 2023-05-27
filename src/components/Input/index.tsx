import React from 'react'
import { KeyboardTypeOptions } from 'react-native';
import { MaskArray } from 'react-native-mask-input';
import { InputContainer, InputLabel, StyledInput } from './styles';

type InputProps = {
    handleChange : (field: string, text: string)=> void,
    value: string;
    placeholder?: string | '';
    keyboardType?: KeyboardTypeOptions;
    width?: string;
    label: string;
    mask?:  MaskArray | ((value?: string) => MaskArray) | string;

}

function Input(props: InputProps) {
  const { handleChange, value, placeholder, keyboardType, width, label, mask } = props;

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        width={width}
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
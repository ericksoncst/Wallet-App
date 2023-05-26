import React from 'react'
import { KeyboardTypeOptions } from 'react-native';
import { StyledInput } from './styles';

type InputProps = {
    handleChange : (field: string, text: string)=> void,
    value: string;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    width?: string;

}

function Input(props: InputProps) {
  const { handleChange, value, placeholder, keyboardType, width } = props;

  return (
    <StyledInput
      width={width}
      keyboardType={keyboardType}
      onChangeText={handleChange}
      value={value} 
      placeholder={placeholder} />
  )
}

export default Input
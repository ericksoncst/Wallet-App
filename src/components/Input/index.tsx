import React from 'react'
import  {  MaskInputProps } from 'react-native-mask-input';
import { InputContainer, InputLabel, StyledInput, Error } from './styles';

interface IInputProps extends MaskInputProps {
    handleChange : (field: string, text: string)=> void,
    width?: string;
    label: string;
    color?: string;
    withIcon?: boolean | false;
    error?: string | '' ;
    touched?: boolean;
    testID: string;
}

function Input(props: IInputProps) {
  const { 
    handleChange, 
    value, 
    placeholder, 
    keyboardType, 
    width, 
    label, 
    mask, 
    color, 
    withIcon,
    error,
    touched,
    testID
  } = props;


  return (
    <InputContainer width={width} >
      <InputLabel color={color}>{label}</InputLabel>
      <StyledInput
        testID={testID}
        withIcon={withIcon}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        value={value} 
        placeholder={placeholder} 
        mask={mask}
      />
      {error && touched && <Error testID={`err${testID}`}>{error}</Error>}
    </InputContainer>
  )
}

export default Input
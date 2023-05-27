import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import { Container, IconContainer } from './style'

type Props = NativeStackScreenProps<RootStackParamList>;

function HeaderRight(props: Props)  {
  return (
    <Container 
      onPress={() => props.navigation.navigate('Form') }>
      <IconContainer>
        <Icon name='plus' size={22} color='#12C2E9' />
      </IconContainer>
    </Container>
  )
}

export default HeaderRight
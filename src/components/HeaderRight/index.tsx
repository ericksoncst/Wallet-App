import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign'
import { RootStackParamList } from '../../routes/root.routes';


import { Container, IconContainer } from './style'



function HeaderRight()  {

  const { navigation } = useNavigation<NativeStackScreenProps<RootStackParamList>>();


  return (
    <Container 
      onPress={() => navigation.navigate('Form') }>
      <IconContainer>
        <Icon name='plus' size={22} color='#12C2E9' />
      </IconContainer>
    </Container>
  )
}

export default HeaderRight
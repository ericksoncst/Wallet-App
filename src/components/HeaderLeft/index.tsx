import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native';

import { Container, IconContainer } from './style';

type HProps = { marginTop: number | 0 }



function HeaderLeft(props: HProps)  {
  
  const { marginTop } = props;
  const navigation = useNavigation();

  return (
    <Container 
      onPress={() => navigation.goBack() }>
      <IconContainer marginTop={marginTop}>
        <Icon name='arrow-left' size={22} color='#12C2E9' />
      </IconContainer>
    </Container>
  )
}

export default HeaderLeft
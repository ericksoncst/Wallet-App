import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import { Container, IconContainer } from './style';

type Props = NativeStackScreenProps<RootStackParamList>;

type HProps = {
  navProps: Props;
  marginTop: number | 0
}



function HeaderLeft(props: HProps)  {

  const { navProps, marginTop } = props;

  return (
    <Container 
      onPress={() => navProps.navigation.goBack() }>
      <IconContainer marginTop={marginTop}>
        <Icon name='arrow-left' size={22} color='#12C2E9' />
      </IconContainer>
    </Container>
  )
}

export default HeaderLeft
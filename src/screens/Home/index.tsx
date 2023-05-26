import * as React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import Button from '../../components/Button';
import BgWrapper from '../../components/Background';
import { ButtonContainer, Title, TitleContainer } from './style';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({navigation}: Props) {

  return (
    <BgWrapper>
      <React.Fragment>
        <TitleContainer>
          <Title>Wallet Test</Title>
        </TitleContainer>
        <ButtonContainer>
          <Button 
            title='meus cartões' 
            color='#12C2E9' 
            textColor='#FFF' 
            disabled={false} 
            handlePress={() => navigation.navigate('Cards')} />
          <Button 
            title='cadastrar cartão' 
            color='#A5FF32' 
            textColor='#142995' 
            disabled={false} 
            handlePress={() => navigation.navigate('Form')} />
        </ButtonContainer>
      </React.Fragment>
    </BgWrapper>
  );
}

export default HomeScreen


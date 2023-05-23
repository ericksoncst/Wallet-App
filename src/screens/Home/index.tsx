import * as React from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({navigation}: Props) {

  return (
    //TODO: replace View
    <View style={{  alignItems: 'center', justifyContent: 'space-between', height: 120 }}>
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
    </View>
  );
}

export default HomeScreen


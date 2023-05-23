import * as React from 'react';
import { Button, View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({navigation}: Props) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="meus cartões"
        onPress={() => navigation.navigate('Cards')}
      />
      <Button
        title="cadastrar cartão"
        onPress={() => navigation.navigate('Form')}
      />

    </View>
  );
}

export default HomeScreen


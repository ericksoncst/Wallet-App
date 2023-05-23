import * as React from 'react';
import { Button, View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';

type Props = NativeStackScreenProps<RootStackParamList, 'CardSaved'>;


function CardSaved({navigation}: Props) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>sucesso</Text>
      <Button
        title="avançar"
        onPress={() => navigation.navigate('Cards')}
      />
    </View>
  );
}

export default CardSaved
import * as React from 'react';
import { Button, View, Text } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root.routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;


function Form({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cadastrar cartão</Text>
      <Button
        title="avançar"
        onPress={() => navigation.navigate('CardSaved')}
      />
    </View>
  );
}

export default Form
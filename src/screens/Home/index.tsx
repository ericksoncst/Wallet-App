import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Form"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
}

export default HomeScreen


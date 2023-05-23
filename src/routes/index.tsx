import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import Form from '../screens/Form';
import { RootStackParamList } from './root.routes';
import Cards from '../screens/Cards';
import CardSaved from '../screens/CardSaved';





const RootStack = createNativeStackNavigator<RootStackParamList>();



export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Form" component={Form} />
        <RootStack.Screen name="Cards" component={Cards} />
        <RootStack.Screen name="CardSaved" component={CardSaved} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}
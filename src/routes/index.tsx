import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Form from '../screens/Form';
import { RootStackParamList } from './root.routes';
import Cards from '../screens/Cards';
import CardSaved from '../screens/CardSaved';

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home"
        screenOptions={() => ({...TransitionPresets.SlideFromRightIOS})}>
      
        <RootStack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <RootStack.Screen name="Form" component={Form} />
        <RootStack.Screen name="Cards" component={Cards} />
        <RootStack.Screen name="CardSaved" component={CardSaved} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}
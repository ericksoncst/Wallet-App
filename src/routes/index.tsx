import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Form from '../screens/Form';
import { RootStackParamList } from './root.routes';
import Cards from '../screens/Cards';
import CardSaved from '../screens/CardSaved';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

const RootStack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient()

export default function App() {

  return (
    
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStack.Navigator initialRouteName="Home"
          screenOptions={() => ({...TransitionPresets.SlideFromRightIOS})}>
        
          <RootStack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <RootStack.Screen name="Form" component={Form} options={props => ({
            headerTransparent: true,
            headerTitleStyle: {
              color: '#12C2E9',
              fontSize: 22,
      
            },
            headerTitleAlign: 'center',
            headerTitle: 'cadastro' ,
            headerLeft: () => <HeaderLeft navProps={props} marginTop={0}/>
      
          })}
          />
          <RootStack.Screen name="Cards" component={Cards}
            options={props => ({
              headerTitleStyle: {
                color: '#142995',
                fontSize: 22,
                
              },
              headerTitleAlign: 'center',
              headerTitle: 'Wallet Test' ,
              headerLeft: () => <HeaderLeft navProps={props} marginTop={8}/>,
              headerRight: () => <HeaderRight {...props} />,
              headerStyle: {
                shadowColor: '',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 20,
              }
                
            })}
          />
          <RootStack.Screen name="CardSaved" component={CardSaved} options={props => ({
            headerTransparent: true,
            headerTitleStyle: {
              color: '#142995',
              fontSize: 22,
      
            },
            headerTitleAlign: 'center',
            headerTitle: 'Wallet Test' ,
            headerLeft: () => <HeaderLeft navProps={props} marginTop={0}/>
      
          })}/>

        </RootStack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>

  );
}
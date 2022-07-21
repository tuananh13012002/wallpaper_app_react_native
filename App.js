import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from'@react-navigation/stack';
import FlashScreen from './screen/FlashScreen';
import 'react-native-gesture-handler';
import Home from './screen/Home';
import Item from './screen/Item';
const Stack=createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen
      name='FlashScreen'
      component={FlashScreen}
      ></Stack.Screen>
         <Stack.Screen
      name='Home'
      component={Home}
      ></Stack.Screen>
         <Stack.Screen
      name='Item'
      component={Item}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
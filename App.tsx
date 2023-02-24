import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar}  from 'expo-status-bar';
import { View } from 'react-native';
import Asteroid_Data from './Screens/Asteroid';
import HomePage from './Screens/Home';
import { s } from 'react-native-wind';

export type Screen_List = {
  Home: undefined;
  Asteroid: { Asteroid: string | number | null | undefined }
}
const App=()=>{
const Stack = createNativeStackNavigator<Screen_List>()
  return (
    <NavigationContainer>
      <View style={s`h-full`}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomePage} options={{ title: "Home" }} />
          <Stack.Screen name='Asteroid' component={Asteroid_Data} options={{ title: "About Asteroid" }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
export default App;
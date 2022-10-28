import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import LoginSignup from '../Screens/LoginAndSignup/LoginSignup';
import OtpScreen from '../Screens/OtpScreen/OtpScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import RideListScreen from '../Screens/RideListScreen/RideListScreen';


const Stack = createNativeStackNavigator();


function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="ridelist" component={RideListScreen} /> */}
        <Stack.Screen name="loginSignup" component={LoginSignup} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
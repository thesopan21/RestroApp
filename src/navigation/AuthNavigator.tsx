import { StyleSheet, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { AuthStackParamList } from '../types/navigationTypes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})
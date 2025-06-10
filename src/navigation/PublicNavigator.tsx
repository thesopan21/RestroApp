import { StyleSheet, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { PublicStackParamList } from '../types/navigationTypes'


const Stack = createNativeStackNavigator<PublicStackParamList>()

const PublicNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default PublicNavigator

const styles = StyleSheet.create({})
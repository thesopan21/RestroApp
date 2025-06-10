import { StyleSheet, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoleBasedStackParamList } from '../types/navigationTypes';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator<RoleBasedStackParamList>();

const RoleBasedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Feed' component={FeedScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default RoleBasedNavigator

const styles = StyleSheet.create({})
//================= build in package imports ===========================
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//================= my local imports ===========================
import RoleBasedNavigator from './RoleBasedNavigator';
import AuthNavigator from './AuthNavigator';
import PublicNavigator from './PublicNavigator';
import { useAuth } from '../context/AuthContext';
import { linking } from './linking';
import { RootStackParamList } from '../types/navigationTypes';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../theme/navigationThemes';



const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {

  const { isLoggedIn, role } = useAuth();
  const colorScheme = useColorScheme(); // 'light' | 'dark'
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  let initialRoute: keyof RootStackParamList = 'Public';
  if (isLoggedIn) {
    initialRoute = role === 'admin' ? 'RoleBased' : 'RoleBased';
  } else {
    initialRoute = 'Public';
  }

  return (
    <NavigationContainer linking={linking} theme={theme}>
      <RootStack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Public" component={PublicNavigator} />
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="RoleBased" component={RoleBasedNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
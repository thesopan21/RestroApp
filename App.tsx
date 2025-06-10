import React from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './src/navigation/RootNavigator'
import { AuthProvider } from './src/context/AuthContext'
import { Provider } from 'react-redux'
import store from './src/redux/store'


const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
        <Provider store={store}>
            <RootNavigator />
        </Provider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App
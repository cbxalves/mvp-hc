import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'

import Home from 'containers/Home'
import Creation from 'containers/Creation'

type RootStackParamList = {
  Home: undefined
  Creation: {
    creationId: string
  }
}

enableScreens()

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Creation' component={Creation} />
    </Stack.Navigator>
  )
}

export default StackNavigator

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'

import Home from 'containers/Home'
import TitleDetails from 'containers/TitleDetails'

enableScreens()

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='TitleDetails' component={TitleDetails} />
    </Stack.Navigator>
  )
}

export default StackNavigator

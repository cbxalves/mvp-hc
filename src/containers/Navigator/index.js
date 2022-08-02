import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'

import Favorites from 'containers/Favorites'
import TitleDetails from 'containers/TitleDetails'

enableScreens()

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Favorites'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Favorites' component={Favorites} />
      <Stack.Screen name='TitleDetails' component={TitleDetails} />
    </Stack.Navigator>
  )
}

export default StackNavigator

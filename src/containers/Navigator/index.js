import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { enableScreens } from 'react-native-screens'
import { useTheme } from 'react-native-paper'

import Home from '../Home'

enableScreens()

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#fff',
  },
})

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

export const BottomNavigation = () => {
  const theme = useTheme()
  const tabBarColor = theme.colors.surface

  return (
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='initialRoute'
      shifting={false}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.grey}
      barStyle={styles.bar}
      // sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: 'home',
          tabBarColor,
          // unmountOnBlur: true,
        }}
      />
      {/* <Tab.Screen
        name='Camera'
        component={Camera}
        options={{
          tabBarIcon: 'qrcode',
          tabBarColor,
          tabBarLabel: t('navigation.camera'),
        }}
      /> */}
    </Tab.Navigator>
  )
}

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Root'>
      <Stack.Screen
        name='Root'
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name='Menu'
        component={Menu}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  )
}

export default StackNavigator

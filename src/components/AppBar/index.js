import React from 'react'
import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Appbar } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import logo from 'assets/images/logo.png'
import styles from './styles'

const AppBar = ({ type }) => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <Appbar.Header style={styles.header} statusBarHeight={getStatusBarHeight()}>
      {type === 'back' && (
        <Appbar.BackAction style={styles.action} onPress={goBack} />
      )}
      <Image style={styles.logo} source={logo} resizeMode='contain' />
      {type === 'back' && <View style={styles.action} />}
    </Appbar.Header>
  )
}

export default AppBar

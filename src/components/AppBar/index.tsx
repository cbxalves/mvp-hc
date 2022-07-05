import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Appbar } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import logo from 'assets/images/gronda_logo.png'
import backBtn from 'assets/images/back.png'
import styles from './styles'

type AppBarButton = 'back' | 'home'

interface Props {
  type?: AppBarButton
}

const AppBar: React.FC<Props> = ({ type }) => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <Appbar.Header style={styles.header} statusBarHeight={getStatusBarHeight()}>
      {type === 'back' ? (
        <TouchableOpacity onPress={goBack}>
          <Image style={styles.back} source={backBtn} />
        </TouchableOpacity>
      ) : (
        <Image style={styles.logo} source={logo} resizeMode='contain' />
      )}
    </Appbar.Header>
  )
}

export default AppBar

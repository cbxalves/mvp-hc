import React, { useEffect, useState } from 'react'
import { View, StatusBar } from 'react-native'
import { Text } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { useNetInfo } from '@react-native-community/netinfo'

import styles from './styles'

const NetInfoWrapper = () => {
  const netInfo = useNetInfo()
  const [isVisible, setVisibility] = useState(false)

  // useNetInfo hook starts with the wrong state on app launch
  useEffect(() => {
    const timer = setTimeout(() => setVisibility(true), 1000)
    return () => clearTimeout(timer)
  })

  return isVisible && !netInfo.isConnected ? (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' translucent backgroundColor='#fff' />
      <LottieView
        style={styles.lottie}
        source={require('../../assets/lottie/wifi.json')}
        autoPlay
        loop
      />
      <Text style={styles.text}>
        {'Check your internet access and try again.'}
      </Text>
    </View>
  ) : null
}

export default NetInfoWrapper

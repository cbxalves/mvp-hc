import React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'

const LoadingIcon = ({ animating }) => {
  const theme = useTheme()

  return animating ? (
    <ActivityIndicator
      animating={animating}
      size='large'
      color={theme.colors.primary}
      style={styles.loading}
    />
  ) : null
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
})

export default LoadingIcon

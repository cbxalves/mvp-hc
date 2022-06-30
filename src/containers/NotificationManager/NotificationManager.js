import React from 'react'
import { StyleSheet } from 'react-native'
import { Snackbar, withTheme } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const NotificationManager = ({ notifications, hideNotification }) => {
  const { variant, show, message } = notifications
  const isError = variant === 'error'

  return (
    <Snackbar
      wrapperStyle={styles.wrapper}
      theme={{
        colors: {
          onSurface: isError ? '#f44336' : '#4caf50',
          accent: '#000',
        },
      }}
      visible={show}
      onDismiss={hideNotification}
      action={{
        label: 'Close',
        onPress: () => {
          hideNotification()
        },
      }}
      duration={Snackbar.DURATION_MEDIUM}
    >
      {message}
    </Snackbar>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    top: hp('12%'),
  },
})

NotificationManager.propTypes = {}

export default withTheme(NotificationManager)

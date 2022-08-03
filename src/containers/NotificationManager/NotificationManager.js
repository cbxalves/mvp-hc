import React from 'react'
import { StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper'

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
  wrapper: {},
})

NotificationManager.propTypes = {}

export default NotificationManager

import './config/reactotron'
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

// import NetInfoWrapper from 'components/NetInfo'
import theme from './config/theme'
import Navigator from './containers/Navigator'
import NotificationManager from './containers/NotificationManager'
import store, { persistor } from './store'
import { navigationRef, isMountedRef } from './util/RootNavigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  useEffect(() => {
    isMountedRef.current = true

    return () => (isMountedRef.current = false)
  }, [])

  const renderNotifications = () => {
    return <NotificationManager />
  }

  return (
    <View style={styles.app}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <SafeAreaProvider>
              <NavigationContainer ref={navigationRef}>
                <Navigator />
                {renderNotifications()}
                {/* <NetInfoWrapper /> */}
              </NavigationContainer>
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
})

export default App

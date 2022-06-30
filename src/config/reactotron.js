/* global __DEV__ */

import { NativeModules, Platform } from 'react-native'
import Reactotron from 'reactotron-react-native'
import ReactotronFlipper from 'reactotron-react-native/dist/flipper'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL
  const scriptHostname = scriptURL.split('://')[1].split(':')[0]

  const tron = Reactotron.configure({
    host: Platform.OS === 'ios' ? scriptHostname : 'localhost',
    createSocket: path => new ReactotronFlipper(path),
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  tron.clear()

  console.tron = tron
}

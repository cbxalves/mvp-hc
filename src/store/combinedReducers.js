import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import AsyncStorage from '@react-native-async-storage/async-storage'

import favorites from 'containers/Favorites/ducks'
// import creation from 'containers/TitleDetails/ducks'
import notifications from 'containers/NotificationManager/ducks'

const encryptor = encryptTransform({
  secretKey: 'supersecretlabapp',
  onError: error => {
    // Handle the error.
  },
})

const rootConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  transforms: [encryptor],
}

const rootReducer = combineReducers({
  favorites,
  // creation,
  notifications,
})

export default persistReducer(rootConfig, rootReducer)

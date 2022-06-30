import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import AsyncStorage from '@react-native-async-storage/async-storage'

// import creations from 'containers/Creations/ducks'
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
  // creations,
  notifications,
})

export default persistReducer(rootConfig, rootReducer)

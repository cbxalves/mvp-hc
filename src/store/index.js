/*
 *
 * Redux Store
 *
 */

// /* global __DEV__ */

import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import combinedReducers from './combinedReducers'
import combinedSagas from './combinedSagas'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null

// Build the middleware for intercepting and dispatching navigation actions
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware]

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares)

const store = createStore(combinedReducers, composer)

combinedSagas.forEach(saga => {
  sagaMiddleware.run(saga)
})

export const persistor = persistStore(store)
// persistor.purge()
export default store

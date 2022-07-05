/**
 * @module Home/sagas
 */

import { takeLatest, call, put, race, delay } from 'redux-saga/effects'
import {
  FETCH_CREATIONS,
  fetchCreationsSuccess,
  fetchCreationsError,
} from './ducks'
import { showNotification } from 'containers/NotificationManager/ducks'
import request from 'util/request'
import getDefaultHeaders from 'util/getDefaultHeaders'
import { API_URL } from 'config/endpoints'

/**
 * Fetch creations
 * @param {Object} action
 */
function* fetchCreationsSaga(action) {
  try {
    const requestUrl = `${API_URL}/creations`
    const { response } = yield race({
      response: call(request, requestUrl, {
        method: 'GET',
        headers: getDefaultHeaders(),
      }),
      timeout: delay(5000),
    })
    if (response) {
      yield put(fetchCreationsSuccess(response.data))
    } else {
      yield put({ type: 'Creations/TIMEOUT_ERROR' })
      yield put(showNotification('error', 'Error: Network timeout.'))
    }
  } catch (error) {
    yield put(fetchCreationsError(error))
    yield put(showNotification('error', 'Error: Fetching creations.'))
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_CREATIONS, fetchCreationsSaga)
}

export default rootSaga

/**
 * @module Details/sagas
 */

import { takeLatest, call, put, race, delay } from 'redux-saga/effects'
import qs from 'qs'

import { API_URL } from 'config/endpoints'
import { showNotification } from 'containers/NotificationManager/ducks'
import getDefaultHeaders from 'util/getDefaultHeaders'
import request from 'util/request'

import {
  GET_TITLE_DETAILS,
  getTitleDetailsSuccess,
  getTitleDetailsError,
} from './ducks'

/**
 * Get title details
 * @param {Object} action
 */
function* getTitleDetailsSaga(action) {
  try {
    const requestUrl = `${API_URL}${qs.stringify(
      {
        apikey: 'f6621f23',
        i: action.id,
      },
      { addQueryPrefix: true }
    )}`
    const { response } = yield race({
      response: call(request, requestUrl, {
        method: 'GET',
        headers: getDefaultHeaders(),
      }),
      timeout: delay(5000),
    })
    if (response) {
      yield put(getTitleDetailsSuccess(response.data))
    } else {
      yield put({ type: 'Home/TIMEOUT_ERROR' })
      yield put(showNotification('error', 'Error: Network timeout.'))
    }
  } catch (error) {
    yield put(getTitleDetailsError(error))
    yield put(showNotification('error', 'Error: Get title details.'))
  }
}

export function* rootSaga() {
  yield takeLatest(GET_TITLE_DETAILS, getTitleDetailsSaga)
}

export default rootSaga

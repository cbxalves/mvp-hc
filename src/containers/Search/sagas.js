/**
 * @module Search/sagas
 */

import { takeLatest, call, put, race, delay } from 'redux-saga/effects'
import qs from 'qs'

import { API_URL } from 'config/endpoints'
import { showNotification } from 'containers/NotificationManager/ducks'
import getDefaultHeaders from 'util/getDefaultHeaders'
import request from 'util/request'

import { SEARCH_TITLE, searchTitleSuccess, searchTitleError } from './ducks'

/**
 * Search Movies & TV Shows
 * @param {Object} action
 */
function* searchTitleSaga(action) {
  try {
    const requestUrl = `${API_URL}${qs.stringify(
      {
        apikey: 'f6621f23',
        s: action.title,
        type: ['movies', 'series'],
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
      yield put(searchTitleSuccess(response.data))
    } else {
      yield put({ type: 'Home/TIMEOUT_ERROR' })
      yield put(showNotification('error', 'Error: Network timeout.'))
    }
  } catch (error) {
    yield put(searchTitleError(error))
    yield put(showNotification('error', 'Error: Searching for movies & shows.'))
  }
}

export function* rootSaga() {
  yield takeLatest(SEARCH_TITLE, searchTitleSaga)
}

export default rootSaga

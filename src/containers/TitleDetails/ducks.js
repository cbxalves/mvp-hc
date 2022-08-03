/**
 * @module Details/ducks
 */

import update from 'immutability-helper'

/**
 * Constants
 */
export const GET_TITLE_DETAILS = 'Details/GET_TITLE_DETAILS'
export const GET_TITLE_DETAILS_SUCCESS = 'Details/GET_TITLE_DETAILS_SUCCESS'
export const GET_TITLE_DETAILS_ERROR = 'Details/GET_TITLE_DETAILS_ERROR'
export const TIMEOUT_ERROR = 'Details/TIMEOUT_ERROR'

const initialState = {
  data: null,
  isLoading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TITLE_DETAILS:
      return update(state, {
        data: { $set: null },
        isLoading: { $set: true },
      })
    case GET_TITLE_DETAILS_SUCCESS:
      return update(state, {
        data: { $set: action.data },
        isLoading: { $set: false },
      })

    case GET_TITLE_DETAILS_ERROR:
    case TIMEOUT_ERROR:
      return update(state, {
        isLoading: { $set: false },
      })

    default:
      return state
  }
}

/**
 * Get title details action creators
 */
export const getTitleDetails = id => ({
  type: GET_TITLE_DETAILS,
  id,
})
export const getTitleDetailsSuccess = data => ({
  type: GET_TITLE_DETAILS_SUCCESS,
  data,
})
export const getTitleDetailsError = error => ({
  type: GET_TITLE_DETAILS_ERROR,
  error,
})

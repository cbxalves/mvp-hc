/**
 * @module Home/ducks
 */

import update from 'immutability-helper'

import { Creation } from './types'

/**
 * Constants
 */
export const FETCH_CREATIONS = 'Home/FETCH_CREATIONS'
export const FETCH_CREATIONS_SUCCESS = 'Home/FETCH_CREATIONS_SUCCESS'
export const FETCH_CREATIONS_ERROR = 'Home/FETCH_CREATIONS_ERROR'

const initialState = {
  data: [],
  isLoading: false,
  dataFetched: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CREATIONS:
      return update(state, {
        data: { $set: [] },
        isLoading: { $set: true },
        dataFetched: { $set: false },
      })

    case FETCH_CREATIONS_SUCCESS:
      return update(state, {
        data: { $set: action.data },
        isLoading: { $set: false },
        dataFetched: { $set: true },
      })

    case FETCH_CREATIONS_ERROR:
      return update(state, {
        isLoading: { $set: false },
        dataFetched: { $set: false },
      })

    default:
      return state
  }
}

/**
 * Fetch restaurants action creators
 */
export const fetchCreations = () => ({
  type: FETCH_CREATIONS,
})
export const fetchCreationsSuccess = (data: Creation[]) => ({
  type: FETCH_CREATIONS_SUCCESS,
  data,
})
export const fetchCreationsError = error => ({
  type: FETCH_CREATIONS_ERROR,
  error,
})

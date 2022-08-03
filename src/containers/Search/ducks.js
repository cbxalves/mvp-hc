/**
 * @module Search/ducks
 */

import update from 'immutability-helper'

/**
 * Constants
 */
export const SEARCH_TITLE = 'Search/SEARCH_TITLE'
export const SEARCH_TITLE_SUCCESS = 'Search/SEARCH_TITLE_SUCCESS'
export const SEARCH_TITLE_ERROR = 'Search/SEARCH_TITLE_ERROR'
export const TOGGLE_VISIBILITY = 'Search/TOGGLE_VISIBILITY'
export const RESET_RESULTS = 'Search/RESET_RESULTS'

export const TIMEOUT_ERROR = 'Search/TIMEOUT_ERROR'

const initialState = {
  results: [],
  hidden: [],
  isLoading: false,
  dataFetched: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TITLE:
      return update(state, {
        results: { $set: [] },
        isLoading: { $set: true },
        dataFetched: { $set: false },
      })

    case SEARCH_TITLE_SUCCESS:
      return update(state, {
        results: {
          $set: action.data?.Search?.filter(
            t => !state.hidden.includes(t.imdbID)
          ),
        },
        isLoading: { $set: false },
        dataFetched: { $set: true },
      })

    case SEARCH_TITLE_ERROR:
      return update(state, {
        isLoading: { $set: false },
        dataFetched: { $set: false },
      })

    case RESET_RESULTS:
      return update(state, {
        results: { $set: [] },
        dataFetched: { $set: false },
      })

    case TOGGLE_VISIBILITY:
      return update(state, {
        hidden: {
          $apply: hidden => {
            const foundTitle = hidden.find(
              t => t.imdbID === action.title.imdbID
            )
            if (foundTitle) {
              return hidden.filter(t => t.imdbID !== action.title.imdbID)
            }
            return [...hidden, action.title]
          },
        },
      })

    case TIMEOUT_ERROR:
      return update(state, {
        isLoading: { $set: false },
      })

    default:
      return state
  }
}

/**
 * Search movies & tv shows action creators
 */
export const searchTitle = title => ({
  type: SEARCH_TITLE,
  title,
})
export const searchTitleSuccess = data => ({
  type: SEARCH_TITLE_SUCCESS,
  data,
})
export const searchTitleError = error => ({
  type: SEARCH_TITLE_ERROR,
  error,
})

/**
 * Reset search results action creators
 */
export const resetResults = () => ({
  type: RESET_RESULTS,
})

/**
 * Hide/Unhide title from search action creators
 */
export const toggleVisibility = title => ({
  type: TOGGLE_VISIBILITY,
  title,
})

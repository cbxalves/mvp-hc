/**
 * @module Favorites/ducks
 */

import update from 'immutability-helper'

/**
 * Constants
 */
export const SEARCH_TITLE = 'Favorites/SEARCH_TITLE'
export const SEARCH_TITLE_SUCCESS = 'Favorites/SEARCH_TITLE_SUCCESS'
export const SEARCH_TITLE_ERROR = 'Favorites/SEARCH_TITLE_ERROR'
export const GET_TITLE_DETAILS = 'Favorites/GET_TITLE_DETAILS'
export const GET_TITLE_DETAILS_SUCCESS = 'Favorites/GET_TITLE_DETAILS_SUCCESS'
export const GET_TITLE_DETAILS_ERROR = 'Favorites/GET_TITLE_DETAILS_ERROR'
export const TOGGLE_FAVORITE = 'Favorites/TOGGLE_FAVORITE'
export const TOGGLE_VISIBILITY = 'Favorites/TOGGLE_VISIBILITY'
export const TIMEOUT_ERROR = 'Favorites/TIMEOUT_ERROR'

const initialState = {
  results: [],
  details: null,
  data: [],
  hidden: [],
  isLoading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TITLE:
      return update(state, {
        results: { $set: [] },
        isLoading: { $set: true },
      })

    case SEARCH_TITLE_SUCCESS:
      return update(state, {
        results: {
          $set: action.data?.Search?.filter(
            t => !state.hidden.includes(t.imdbID)
          ),
        },
        isLoading: { $set: false },
      })

    case SEARCH_TITLE_ERROR:
      return update(state, {
        isLoading: { $set: false },
      })

    case GET_TITLE_DETAILS:
      return update(state, {
        details: { $set: null },
        isLoading: { $set: true },
      })
    case GET_TITLE_DETAILS_SUCCESS:
      return update(state, {
        details: { $set: action.data },
        isLoading: { $set: false },
      })

    case TOGGLE_FAVORITE:
      return update(state, {
        data: {
          $apply: data => {
            const foundTitle = data.find(t => t.imdbID === action.title.imdbID)
            if (foundTitle) {
              return data.filter(t => t.imdbID !== action.title.imdbID)
            }
            return [...data, action.title]
          },
        },
      })

    case TOGGLE_VISIBILITY:
      return update(state, {
        hidden: {
          $apply: hidden => {
            if (hidden.includes(action.id)) {
              return hidden.filter(t => t !== action.id)
            }
            return [...hidden, action.id]
          },
        },
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

/**
 * Add/Remove favorite title action creators
 */
export const toggleFavorite = title => ({
  type: TOGGLE_FAVORITE,
  title,
})

/**
 * Hide/Unhide title from search action creators
 */
export const toggleVisibility = id => ({
  type: TOGGLE_VISIBILITY,
  id,
})

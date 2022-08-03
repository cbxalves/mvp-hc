/**
 * @module Home/ducks
 */

import update from 'immutability-helper'

/**
 * Constants
 */
export const TOGGLE_FAVORITE = 'Home/TOGGLE_FAVORITE'

const initialState = {
  favorites: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return update(state, {
        favorites: {
          $apply: favorites => {
            const foundTitle = favorites.find(
              t => t.imdbID === action.title.imdbID
            )
            if (foundTitle) {
              return favorites.filter(t => t.imdbID !== action.title.imdbID)
            }
            return [...favorites, action.title]
          },
        },
      })

    default:
      return state
  }
}

/**
 * Add/Remove favorite title action creators
 */
export const toggleFavorite = title => ({
  type: TOGGLE_FAVORITE,
  title,
})

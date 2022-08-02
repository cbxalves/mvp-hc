/**
 * @module TitleDetails/ducks
 */

import update from 'immutability-helper'

/**
 * Constants
 */
export const INCREMENT_VISITS = 'TitleDetails/INCREMENT_VISITS'

const initialState = {
  visits: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VISITS:
      return update(state, {
        visits: {
          $apply: visits => {
            if (action.creationId in visits) {
              return {
                ...visits,
                [action.creationId]: visits[action.creationId] + 1,
              }
            }
            return { ...visits, [action.creationId]: 1 }
          },
        },
      })

    default:
      return state
  }
}
export default reducer

/**
 * Increment creation visit count action creator
 */
export const incrementVisits = (creationId: number) => ({
  type: INCREMENT_VISITS,
  creationId,
})

/**
 * @module Creation/ducks
 */

import update from 'immutability-helper'
import { Reducer } from 'redux'

import { CreationState } from './types'

/**
 * Constants
 */
export const INCREMENT_VISITS = 'Creation/INCREMENT_VISITS'

const initialState: CreationState = {
  visits: {},
}

const reducer: Reducer<CreationState> = (state = initialState, action) => {
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

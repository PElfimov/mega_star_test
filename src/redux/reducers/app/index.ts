import {AppState} from "./../../../lib/interfaces"
import {APP} from "./types"

const initialAppState: AppState = {
  alert: null
}

export default function appReducer(state = initialAppState, action) {
  switch (action.type) {
    case APP.SHOW_ALERT: {
      return {
        ...state,
        alert: action.payload
      }
    }

    case APP.HIDDEN_ALERT: {
      return {
        ...state,
        alert: null
      }
    }

    default:
      return state
  }
}

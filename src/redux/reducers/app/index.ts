import {AppState} from "./../../../lib/interfaces"
import {APP} from "./types"

const initialAppState: AppState = {
  alert: null,
  formIsBlocked: true
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

    case APP.FORM_BLOCKED: {
      return {
        ...state,
        formIsBlocked: true
      }
    }

    case APP.FORM_UNBLOCKED: {
      return {
        ...state,
        formIsBlocked: false
      }
    }

    default:
      return state
  }
}

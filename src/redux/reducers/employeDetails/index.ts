import {EMPLOYE_DETAILS} from "./actions"
import {EmployeDetailsState} from "./../../../lib/interfaces"

const initialEmployeDetailsState: EmployeDetailsState = {
  loading: false,
  unloading: false,
  error: null,
  data: null
}

export default function employeDetailsReducer(state = initialEmployeDetailsState, action) {
  switch (action.type) {
    case EMPLOYE_DETAILS.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case EMPLOYE_DETAILS.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case EMPLOYE_DETAILS.LOAD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case EMPLOYE_DETAILS.UNLOAD: {
      return {
        ...state,
        unloading: true
      }
    }

    case EMPLOYE_DETAILS.UNLOAD_SUCCESS: {
      return {
        ...state,
        unloading: false,
        data: action.payload
      }
    }

    case EMPLOYE_DETAILS.UNLOAD_FAILURE: {
      return {
        ...state,
        unloading: false,
        error: action.payload
      }
    }

    default:
      return state
  }
}

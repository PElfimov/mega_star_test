import {EMPLOYE_DETAILS} from "./types"
import {EmployeDetailsState} from "./../../../lib/interfaces"

const initialEmployeDetailsState: EmployeDetailsState = {
  loading: false,
  unloading: false,
  error: null,
  data: {
    id: 0,
    name: " ",
    lastName: " ",
    description: " ",
    status: `active`
  }
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
        unloading: false
      }
    }

    case EMPLOYE_DETAILS.UNLOAD_FAILURE: {
      return {
        ...state,
        unloading: false,
        error: action.payload
      }
    }
    case EMPLOYE_DETAILS.PUT: {
      return {
        ...state,
        data: action.payload
      }
    }

    case EMPLOYE_DETAILS.SAVE_NEW: {
      return {
        ...state,
        unloading: true,
        data: action.payload
      }
    }

    case EMPLOYE_DETAILS.SAVE_NEW_SUCCESS: {
      return {
        ...state,
        unloading: false,
        data: action.payload
      }
    }

    case EMPLOYE_DETAILS.SAVE_NEW_FAILURE: {
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

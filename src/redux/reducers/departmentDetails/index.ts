import {DepartmentDetailsState} from "./../../../lib/interfaces"
import {DEPARTMENT_DETAILS} from "./types"

const initialDepartmentDetailsState: DepartmentDetailsState = {
  loading: false,
  error: null,
  data: null
}

export default function departmentDetailsReducer(state = initialDepartmentDetailsState, action) {
  switch (action.type) {
    case DEPARTMENT_DETAILS.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case DEPARTMENT_DETAILS.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case DEPARTMENT_DETAILS.LOAD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }

    default:
      return state
  }
}

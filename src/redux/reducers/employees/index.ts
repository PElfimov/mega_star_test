import {EMPLOYEES} from "./types"
import {EmployeesState} from "./../../../lib/interfaces"

const initialEmployeesState: EmployeesState = {
  page: 1,
  search: "",
  loading: false,
  error: null,
  data: null
}

export default function employeesReducer(state = initialEmployeesState, action) {
  switch (action.type) {
    case EMPLOYEES.LOAD: {
      const {page, search} = action.payload
      return {
        ...state,
        loading: true,
        page,
        search
      }
    }

    case EMPLOYEES.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case EMPLOYEES.LOAD_FAILURE: {
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

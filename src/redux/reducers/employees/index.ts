import {EmployeesActionType} from "./actions"
import {EmployeesState} from "./../../../lib/interfaces"

const initialEmployeesState: EmployeesState = {
  page: 1,
  search: "",
  loading: false,
  error: null,
  data: {}
}

export default function employeesReducer(state = initialEmployeesState, action) {
  switch (action.type) {
    case EmployeesActionType.LOAD_EMPLOYEES: {
      const {page, search} = action.payload
      return {
        ...state,
        loading: true,
        page,
        search
      }
    }

    case EmployeesActionType.LOAD_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case EmployeesActionType.LOAD_EMPLOYEES_FAILURE: {
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

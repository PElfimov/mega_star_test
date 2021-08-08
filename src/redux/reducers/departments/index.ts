import {DEPARTMENT} from "./actions"
import {DepartmentsState} from "../../../lib/interfaces"

const initialDepartmentsState: DepartmentsState = {
  page: 1,
  search: "",
  loading: false,
  error: null,
  data: null
}

export default function departmentsReducer(state = initialDepartmentsState, action) {
  switch (action.type) {
    case DEPARTMENT.LOAD: {
      const {page, search} = action.payload
      return {
        ...state,
        loading: true,
        page,
        search
      }
    }

    case DEPARTMENT.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case DEPARTMENT.LOAD_FAILURE: {
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

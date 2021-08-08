import {DEPARTMENTS} from "./actions"
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
    case DEPARTMENTS.LOAD: {
      const {page, search} = action.payload
      return {
        ...state,
        loading: true,
        page,
        search
      }
    }

    case DEPARTMENTS.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case DEPARTMENTS.LOAD_FAILURE: {
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

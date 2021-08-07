import {createBrowserHistory} from "history"
import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import employeesReducer from "./employees"

const initial = {
  employees: {}
}

export const history = createBrowserHistory()

export function appReducer(state: {} = initial, action) {
  switch (action.type) {
    case `EMPLOYEES_LOADED`:
      return {
        ...state,
        employees: action.payload
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  app: appReducer,
  employees: employeesReducer,
  router: connectRouter(history)
})

export default rootReducer

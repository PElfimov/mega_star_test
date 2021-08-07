import {createBrowserHistory} from "history"
import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import employeesReducer from "./employees"

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  employees: employeesReducer,
  router: connectRouter(history)
})

export default rootReducer

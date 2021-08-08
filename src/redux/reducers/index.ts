import {createBrowserHistory} from "history"
import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import employeesReducer from "./employees"
import employeDetailsReducer from "./employeDetails"
import departmentsReducer from "./department"

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  employees: employeesReducer,
  employeDetails: employeDetailsReducer,
  departments: departmentsReducer,
  router: connectRouter(history)
})

export default rootReducer

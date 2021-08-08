import {createBrowserHistory} from "history"
import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import employeesReducer from "./employees"
import employeDetailsReducer from "./employeDetails"
import departmentsReducer from "./departments"
import departmentDetailsReducer from "./departmentDetails"

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  employees: employeesReducer,
  employeDetails: employeDetailsReducer,
  departments: departmentsReducer,
  departmentDetails: departmentDetailsReducer,
  router: connectRouter(history)
})

export default rootReducer

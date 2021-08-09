import {createBrowserHistory} from "history"
import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import employeesReducer from "./employees"
import employeDetailsReducer from "./employeDetails"
import departmentsReducer from "./departments"
import departmentDetailsReducer from "./departmentDetails"
import appReducer from "./app"

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  app: appReducer,
  employees: employeesReducer,
  employeDetails: employeDetailsReducer,
  departments: departmentsReducer,
  departmentDetails: departmentDetailsReducer,
  router: connectRouter(history)
})

export default rootReducer

import {createBrowserHistory} from "history"
import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"

const initial = {}

export const history = createBrowserHistory()

export function appReducer(state: {} = initial, action) {
  return state
}

const rootReducer = combineReducers({
  app: appReducer,
  router: connectRouter(history)
})

export default rootReducer

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {BrowserRouter} from "react-router-dom"
import configureAPI from "./api"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {compose} from "recompose"
import reducer from "./redux/index"

const api = configureAPI((...args) => store.dispatch({...args}))

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
)
store.dispatch(Operation.loadDepartments())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

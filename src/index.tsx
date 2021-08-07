import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux"
import {createBrowserHistory} from "history"

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

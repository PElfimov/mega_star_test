import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {ConnectedRouter} from "connected-react-router"
import {Provider} from "react-redux"
import store from "./redux"
import {history} from "./redux/reducers"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

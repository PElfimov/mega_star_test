import {createStore, applyMiddleware} from "redux"
import {compose} from "recompose"
import createSagaMiddleware from "redux-saga"
import reducer, {history} from "./reducers"
import rootSaga from "./sagas"
import {routerMiddleware} from "connected-react-router"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store

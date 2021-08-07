import {createStore, applyMiddleware, compose} from "redux"

import createSagaMiddleware from "redux-saga"
import reducer, {history} from "./reducers"
import rootSaga from "./sagas"
import {routerMiddleware} from "connected-react-router"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store

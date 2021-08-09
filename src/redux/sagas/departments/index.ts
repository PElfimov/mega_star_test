import {DEPARTMENTS} from "../../reducers/departments/types"
import {DEPARTMENT_DETAILS} from "../../reducers/departmentDetails/types"
import {getRoutingConfig, ROUTES_NAME} from "./../../../sections/app/routes"
import {selectEmployees} from "../../reducers/selectors/selectors"
import {LOCATION_CHANGE} from "connected-react-router"
import {call, fork, take, put, takeEvery, select} from "redux-saga/effects"
import {matchPath} from "react-router"
import api from "../../../lib/api"

const PATH = `departments`

function* loadDepartmentDetails(data) {
  const id = data.payload

  const request = yield call(() => api({method: `get`, path: PATH, id: id}))
  try {
    if (`id` in request.data) {
      yield put({
        type: DEPARTMENT_DETAILS.LOAD_SUCCESS,
        payload: request.data
      })
    } else
      yield put({
        type: DEPARTMENT_DETAILS.LOAD_FAILURE,
        payload: request.data
      })
  } catch (error) {
    yield put({
      type: DEPARTMENT_DETAILS.LOAD_FAILURE,
      payload: error
    })
  }
}

function* loadDepartmentsList() {
  const request = yield call(() => api({method: `get`, path: PATH}))
  const data = request.data
  yield put({
    type: DEPARTMENTS.LOAD_SUCCESS,
    payload: data
  })
}

export function* routeChange() {
  while (true) {
    const action = yield take(LOCATION_CHANGE)

    const mainPage = matchPath(action.payload.location.pathname, getRoutingConfig(ROUTES_NAME.MAIN))
    const departmentsPage = matchPath(action.payload.location.pathname, getRoutingConfig(ROUTES_NAME.DEPARTMENTS))

    if (departmentsPage || mainPage) {
      const state = yield select(selectEmployees)
      const {page, search} = state
      yield put({
        type: DEPARTMENTS.LOAD,
        payload: {page, search}
      })
    }

    const detailsPage = matchPath(action.payload.location.pathname, getRoutingConfig(ROUTES_NAME.DEPARTMENT_DETAILS))
    if (detailsPage) {
      const {id} = detailsPage.params

      if (id) {
        yield put({
          type: DEPARTMENT_DETAILS.LOAD,
          payload: id
        })
      }
    }
  }
}

export default function* departmentsSaga() {
  yield fork(routeChange)
  yield takeEvery(DEPARTMENTS.LOAD, loadDepartmentsList)
  yield takeEvery(DEPARTMENT_DETAILS.LOAD, loadDepartmentDetails)
}

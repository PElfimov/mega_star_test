import {EMPLOYE_DETAILS} from "../../reducers/employeDetails/types"
import {getRoutingConfig, ROUTES_NAME} from "./../../../sections/app/routes"
import {selectEmployees} from "../../reducers/selectors/selectors"
import {EMPLOYEES} from "../../reducers/employees/types"
import {LOCATION_CHANGE} from "connected-react-router"
import {call, fork, take, put, takeEvery, select} from "redux-saga/effects"
import {matchPath} from "react-router"
import api from "../../../lib/api"
import {APP} from "../../reducers/app/types"

const PATH = `employees`

function* loadEmployeDetails(data) {
  const id = data.payload
  const request = yield call(() => api({method: `get`, id: id, path: PATH}))
  try {
    if (`id` in request.data) {
      yield put({
        type: EMPLOYE_DETAILS.LOAD_SUCCESS,
        payload: request.data
      })
    } else
      yield put({
        type: EMPLOYE_DETAILS.LOAD_FAILURE,
        payload: request.data
      })
  } catch (error) {
    yield put({
      type: EMPLOYE_DETAILS.LOAD_FAILURE,
      payload: error
    })
  }
  yield put({type: APP.FORM_BLOCKED})
}

function* loadEmployeesList() {
  try {
    const request = yield call(() => api({method: `get`, path: PATH}))
    const data = request.data
    yield put({
      type: EMPLOYEES.LOAD_SUCCESS,
      payload: data
    })
  } catch (error) {
    yield put({
      type: EMPLOYE_DETAILS.LOAD_FAILURE,
      payload: error
    })
  }
}

function* saveEmploye(data) {
  try {
    yield call(() => api({method: `post`, path: PATH, data: data.payload}))
    yield put({type: EMPLOYE_DETAILS.UNLOAD_SUCCESS})
    yield put({type: APP.FORM_BLOCKED})
  } catch (error) {
    yield put({
      type: EMPLOYE_DETAILS.UNLOAD_FAILURE,
      payload: error
    })
  }
}

export function* routeChange() {
  while (true) {
    const action = yield take(LOCATION_CHANGE)

    const employeesPage = matchPath(action.payload.location.pathname, getRoutingConfig(ROUTES_NAME.EMPLOYEES))
    if (employeesPage) {
      const state = yield select(selectEmployees)
      const {page, search} = state
      yield put({
        type: EMPLOYEES.LOAD,
        payload: {page, search}
      })
    }

    const detailsPage = matchPath(action.payload.location.pathname, getRoutingConfig(ROUTES_NAME.EMPLOYEES_DETAILS))
    if (detailsPage) {
      const {id} = detailsPage.params

      if (id) {
        yield put({
          type: EMPLOYE_DETAILS.LOAD,
          payload: id
        })
      }
    }
  }
}

function* delEmploye(data) {
  try {
    yield call(() => api({method: `delete`, path: PATH, id: data.payload}))
    yield put({
      type: EMPLOYE_DETAILS.DELETE_SUCCESS
    })
  } catch (error) {
    yield put({
      type: EMPLOYE_DETAILS.DELETE_FAILURE,
      payload: error
    })
  }
}

export default function* employeesSaga() {
  yield fork(routeChange)
  yield takeEvery(EMPLOYEES.LOAD, loadEmployeesList)
  yield takeEvery(EMPLOYE_DETAILS.LOAD, loadEmployeDetails)
  yield takeEvery(EMPLOYE_DETAILS.UNLOAD, saveEmploye)
  yield takeEvery(EMPLOYE_DETAILS.DELETE, delEmploye)
  yield takeEvery(EMPLOYE_DETAILS.DELETE_SUCCESS, loadEmployeesList)
}

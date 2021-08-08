import {EMPLOYE_DETAILS} from "./../../reducers/employeDetails/actions"
import {getRoutingConfig, ROUTES_NAME} from "./../../../sections/app/routes"
import {selectEmployees} from "../../reducers/selectors/selectors"
import {EMPLOYEES} from "./../../reducers/employees/actions"
import axios from "axios"
import {LOCATION_CHANGE} from "connected-react-router"
import {call, fork, take, put, takeEvery, select} from "redux-saga/effects"
import {matchPath} from "react-router"

function fetchUsers(id?: number) {
  let path = `employees`
  if (id) {
    path = `employees/${id}`
  }
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_DOMAIN}/${path}`
  })
}

function* loadEmployeDetails(data) {
  const id = data.payload

  const request = yield call(() => fetchUsers(id))
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
}

function* loadEmployeesList() {
  const request = yield call(fetchUsers)
  const data = request.data
  yield put({
    type: EMPLOYEES.LOAD_SUCCESS,
    payload: data
  })
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

export default function* employeesSaga() {
  yield fork(routeChange)
  yield takeEvery(EMPLOYEES.LOAD, loadEmployeesList)
  yield takeEvery(EMPLOYE_DETAILS.LOAD, loadEmployeDetails)
}

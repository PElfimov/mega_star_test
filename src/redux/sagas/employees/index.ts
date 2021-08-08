import {selectEmployees} from "./../../reducers/employees/selectors"
import {EmployeesActionType} from "./../../reducers/employees/actions"
import axios from "axios"
import {LOCATION_CHANGE} from "connected-react-router"
import {call, fork, take, put, takeEvery, select} from "redux-saga/effects"

function fetchUsers() {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_DOMAIN}/employees`
  })
}

function* loadEmployeesList() {
  const request = yield call(fetchUsers)
  const data = request.data
  yield put({
    type: EmployeesActionType.LOAD_EMPLOYEES_SUCCESS,
    payload: data
  })
}

export function* loadEmployeesOnRouteEnter() {
  console.log("loadEmployeesOnRouteEnter")

  while (true) {
    const action = yield take(LOCATION_CHANGE)

    if (action.payload.location.pathname === "/employees") {
      const state = yield select(selectEmployees)
      const {page, search} = state
      yield put({
        type: EmployeesActionType.LOAD_EMPLOYEES,
        payload: {page, search}
      })
    }
  }
}

export default function* employeesSaga() {
  yield fork(loadEmployeesOnRouteEnter)
  yield takeEvery(EmployeesActionType.LOAD_EMPLOYEES, loadEmployeesList)
}

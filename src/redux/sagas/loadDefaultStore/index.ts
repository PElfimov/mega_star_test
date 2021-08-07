import axios from "axios"
import {call, all, delay, fork} from "redux-saga/effects"

function fetchUsers() {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_DOMAIN}/departments`
  })
}

function* auth() {
  yield delay(2000)
  console.log(`load auth ok`)

  return true
}

function* loadUsers() {
  const reqest = yield call(fetchUsers)
  console.log(reqest)
}

export default function* loadDefaultStore() {
  yield all([fork(auth), fork(loadUsers)])
}

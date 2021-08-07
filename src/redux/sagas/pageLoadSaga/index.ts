import axios from "axios"
import {LOCATION_CHANGE} from "connected-react-router"
import {call, fork, take} from "redux-saga/effects"

function fetchUsers() {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_DOMAIN}/users`
  })
}

function* loadUsers() {
  const reqest = yield call(fetchUsers)
  console.log(`Users Data`, reqest)
}

export default function* pageLoaderSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE)
    if (action.payload.location.pathname.endsWith(`employees`)) {
      yield fork(loadUsers)
    }
  }
}

import axios from "axios"
import {LOCATION_CHANGE} from "connected-react-router"
import {call, fork, take, takeEvery} from "redux-saga/effects"

function fetchUsers() {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API_DOMAIN}/users`
  })
}

function* loadUsers() {
  console.log(`Users Data`)
  const reqest = yield call(fetchUsers)
  console.log(`Users Data`)
  console.log(`Users Data`, reqest)
}

export default function* pageLoaderSaga() {
  while (true) {
    yield take(`ClICK`)
    console.log(`>>:::::`)
    //  if (action.payload.location.pathname.endsWith("blog")) {
    //    yield fork(loadBlogData)
    //  }
  }
}

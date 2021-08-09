import {takeEvery, put, delay} from "redux-saga/effects"

import {APP} from "../../reducers/app/types"

function* hideAlert() {
  yield delay(5000)
  yield put({
    type: APP.HIDDEN_ALERT
  })
}

export default function* appSaga() {
  yield takeEvery(APP.SHOW_ALERT, hideAlert)
}

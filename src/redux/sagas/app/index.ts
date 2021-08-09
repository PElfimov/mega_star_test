import {takeEvery, put, delay} from "redux-saga/effects"

import {APP} from "../../reducers/app/types"
import {EMPLOYE_DETAILS} from "../../reducers/employeDetails/types"
const alert = {
  deleting: {type: `warning`, text: `Delete in progress`},
  deleted: {type: `success`, text: `Deleted`},
  wrong: {type: `danger`, text: `Something is not wrong`},
  saved: {type: `success`, text: `Saved`}
}

function* hideAlert() {
  yield delay(5000)
  yield put({
    type: APP.HIDDEN_ALERT
  })
}

function* showAlert(alert) {
  yield put({
    type: APP.SHOW_ALERT,
    payload: alert
  })
}

export default function* appSaga() {
  yield takeEvery(APP.SHOW_ALERT, hideAlert)
  yield takeEvery(EMPLOYE_DETAILS.DELETE, () => showAlert(alert.deleting))
  yield takeEvery(EMPLOYE_DETAILS.DELETE_SUCCESS, () => showAlert(alert.deleted))
  yield takeEvery(EMPLOYE_DETAILS.DELETE_FAILURE, () => showAlert(alert.wrong))
  yield takeEvery(APP.FORM_BLOCKED, () => showAlert(alert.saved))
}

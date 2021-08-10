import {EMPLOYEES} from "./../../reducers/employees/types"
import {DEPARTMENTS} from "./../../reducers/departments/types"
import {takeEvery, put, delay, takeLatest} from "redux-saga/effects"

import {APP} from "../../reducers/app/types"
import {DEPARTMENT_DETAILS} from "../../reducers/departmentDetails/types"
import {EMPLOYE_DETAILS} from "../../reducers/employeDetails/types"
const alert = {
  deleting: {type: `warning`, text: `Delete in progress`},
  deleted: {type: `success`, text: `Deleted`},
  wrong: {type: `danger`, text: `Something is not wrong`},
  saving: {text: `Saving is in progress ....`, type: `warning`},
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
  yield takeLatest(APP.SHOW_ALERT, hideAlert)
  yield takeEvery(EMPLOYE_DETAILS.DELETE, () => showAlert(alert.deleting))
  yield takeEvery(EMPLOYE_DETAILS.DELETE_SUCCESS, () => showAlert(alert.deleted))
  yield takeEvery(EMPLOYE_DETAILS.DELETE_FAILURE, () => showAlert(alert.wrong))
  yield takeEvery(EMPLOYE_DETAILS.UNLOAD_SUCCESS, () => showAlert(alert.saved))
  yield takeEvery(EMPLOYE_DETAILS.UNLOAD, () => showAlert(alert.saving))
  yield takeEvery(EMPLOYE_DETAILS.SAVE_NEW, () => showAlert(alert.saving))
  yield takeEvery(EMPLOYE_DETAILS.SAVE_NEW_SUCCESS, () => showAlert(alert.saved))
  yield takeEvery(EMPLOYE_DETAILS.SAVE_NEW_FAILURE, () => showAlert(alert.wrong))

  yield takeEvery(DEPARTMENT_DETAILS.DELETE, () => showAlert(alert.deleting))
  yield takeEvery(DEPARTMENT_DETAILS.DELETE_SUCCESS, () => showAlert(alert.deleted))
  yield takeEvery(DEPARTMENT_DETAILS.DELETE_FAILURE, () => showAlert(alert.wrong))
  yield takeEvery(DEPARTMENT_DETAILS.UNLOAD_SUCCESS, () => showAlert(alert.saved))
  yield takeEvery(DEPARTMENT_DETAILS.UNLOAD, () => showAlert(alert.saving))
  yield takeEvery(DEPARTMENT_DETAILS.SAVE_NEW, () => showAlert(alert.saving))
  yield takeEvery(DEPARTMENT_DETAILS.SAVE_NEW_SUCCESS, () => showAlert(alert.saved))
  yield takeEvery(DEPARTMENT_DETAILS.SAVE_NEW_FAILURE, () => showAlert(alert.wrong))

  yield takeEvery(DEPARTMENTS.LOAD_FAILURE, () => showAlert(alert.wrong))
  yield takeEvery(EMPLOYEES.LOAD_FAILURE, () => showAlert(alert.wrong))
}

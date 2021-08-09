import {spawn, call, all} from "redux-saga/effects"
import appSaga from "./app"
import departmentsSaga from "./departments"
import employeesSaga from "./employees"

export default function* rootSaga() {
  const sagas = [employeesSaga, departmentsSaga, appSaga]

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })

  yield all(retrySagas)
}

import {spawn, call, all} from "redux-saga/effects"
import employeesSaga from "./employees"

export default function* rootSaga() {
  console.log("Sagas")

  const sagas = [employeesSaga]

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

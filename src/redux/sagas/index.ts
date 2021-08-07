import {spawn, call, all} from "redux-saga/effects"
import loadDefaultStore from "./loadDefaultStore"

export default function* rootSaga() {
  console.log("Sagas")

  const sagas = [loadDefaultStore]

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

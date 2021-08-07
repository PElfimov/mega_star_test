import {spawn, call, all} from "redux-saga/effects"

export function* saga1() {
  console.log(`Saga1`)
}

export function* saga2() {
  console.log(`Saga1`)
}

export function* saga3() {
  console.log(`Saga1`)
}

export default function* rootSaga() {
  console.log("Sagas")

  const sagas = [saga1, saga2, saga3]

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

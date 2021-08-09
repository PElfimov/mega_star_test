import {Alert} from "./../../../lib/interfaces"
import {APP} from "./types"

export function showAlert(alert: Alert) {
  return (dispatch) => {
    dispatch({type: APP.SHOW_ALERT, payload: alert})

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}
export function hideAlert() {
  return {
    type: APP.HIDDEN_ALERT
  }
}

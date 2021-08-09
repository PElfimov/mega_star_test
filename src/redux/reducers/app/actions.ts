import {Alert} from "./../../../lib/interfaces"
import {APP} from "./types"

export function showAlert(alert: Alert) {
  return {type: APP.SHOW_ALERT, payload: alert}
}
export function hideAlert() {
  return {
    type: APP.HIDDEN_ALERT
  }
}

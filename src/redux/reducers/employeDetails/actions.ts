import {EMPLOYE_DETAILS} from "./types"

export function updateEmploye(data) {
  return {
    type: EMPLOYE_DETAILS.PUT,
    payload: data
  }
}

export function reloadEmploye() {
  return {
    type: EMPLOYE_DETAILS.RELOAD
  }
}

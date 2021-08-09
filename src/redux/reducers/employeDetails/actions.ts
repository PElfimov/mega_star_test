import {EMPLOYE_DETAILS} from "./types"

export function updateEmploye(data) {
  return {
    type: EMPLOYE_DETAILS.PUT,
    payload: data
  }
}

export function loadEmploye(id) {
  return {
    type: EMPLOYE_DETAILS.LOAD,
    payload: id
  }
}

export function saveEmploye(data) {
  return {
    type: EMPLOYE_DETAILS.UNLOAD,
    payload: data
  }
}

export function DelEmploye(id) {
  return {
    type: EMPLOYE_DETAILS.DELETE,
    payload: id
  }
}

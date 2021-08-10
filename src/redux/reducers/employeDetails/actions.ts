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

export function delEmploye(id) {
  return {
    type: EMPLOYE_DETAILS.DELETE,
    payload: id
  }
}


export function saveNewOne(data) {
  return {
    type: EMPLOYE_DETAILS.SAVE_NEW,
    payload: data
  }
}



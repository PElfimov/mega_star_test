import {DEPARTMENT_DETAILS} from "./types"

export function updateDepartment(data) {
  return {
    type: DEPARTMENT_DETAILS.PUT,
    payload: data
  }
}

export function loadDepartment(id) {
  return {
    type: DEPARTMENT_DETAILS.LOAD,
    payload: id
  }
}

export function saveDepartment(data) {
  return {
    type: DEPARTMENT_DETAILS.UNLOAD,
    payload: data
  }
}

export function delDepartment(id) {
  return {
    type: DEPARTMENT_DETAILS.DELETE,
    payload: id
  }
}


export function saveNewDepartment(data) {
  return {
    type: DEPARTMENT_DETAILS.SAVE_NEW,
    payload: data
  }
}



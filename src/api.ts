import axios from "axios"
// import {ActionCreator} from "./store/actions/action-creator/action-creator"

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 5000,
    withCredentials: true
  })

  const onSuccess = (response) => response
  const onFail = (err) => {
    if (err.response.status === 401) {
      // dispatch(ActionCreator.requireAuthorization(false))
      // dispatch(ActionCreator.addLogin(null))
      console.error(err)
    }

    return err
  }

  api.interceptors.response.use(onSuccess, onFail)

  return api
}

export default createAPI

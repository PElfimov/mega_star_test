import axios from "axios"
import {Department, Employe, Method} from "./interfaces"

interface Prop {
  method: Method
  path: string
  id?: number
  data?: Employe | Department
}

export default function api({method, data, path, id}: Prop) {
  if (id) path = path.concat(`/${id}`)
  return axios({
    method: method,
    data: data,
    timeout: 5000,
    url: `${process.env.REACT_APP_API_DOMAIN}/${path}`
  })
}

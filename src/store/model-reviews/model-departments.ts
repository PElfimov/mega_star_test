import {Department, Status} from "./../../lib/interfaces"

export default class ModelDepartment {
  id: number
  name: string = ``
  status: Status = `active`
  description: string | undefined

  constructor(data: Department) {
    this.id = data.id
    this.name = data.name
    this.status = data.status
    this.description = data.description
  }

  static parseDepartment(data) {
    return new ModelDepartment(data)
  }

  static parseDepartments(data) {
    return data.map(ModelDepartment.parseDepartment)
  }
}

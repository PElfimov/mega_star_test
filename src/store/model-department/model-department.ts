import {Department, Status} from "../../lib/interfaces"

export class ModelDepartment {
  id: number = 0
  name: string = ``
  status: Status = `active`
  description: string | undefined = ``

  constructor(data: Department) {
    this.id = data.id
    this.name = data.name
    this.status = data.status
    this.description = data.description
  }

  static parseDepartment(data: Department) {
    return new ModelDepartment(data)
  }

  static parseDepartments(data: Department[]) {
    return data.map(ModelDepartment.parseDepartment)
  }
}

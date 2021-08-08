export type Status = "inactive" | "active"
export interface Department {
  id: number
  name: string
  status: Status
  description?: string
  created_at?: string //"2020-10-19T14:41:58.000Z",
  updated_at?: string //"2020-10-19T14:41:58.000Z",
  deleted_at?: string //"2020-10-19T14:41:58.000Z"
}

export interface EmployeesState {
  page: number
  search: string
  loading: boolean
  error: {} | null
  data: {} | null
}

export interface RootStore {
  employees: EmployeesState
  router: {}
}

export interface Routes {
  id: string
  path: string
  exact: boolean
  component: JSX.Element
}

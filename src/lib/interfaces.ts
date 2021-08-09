export type Status = "inactive" | "active"
export type Method = "get" | "post" | "delete"
export interface Department {
  id: number
  name: string
  status: Status
  description?: string
  created_at?: string //"2020-10-19T14:41:58.000Z",
  updated_at?: string //"2020-10-19T14:41:58.000Z",
  deleted_at?: string //"2020-10-19T14:41:58.000Z"
}

export interface Employe {
  id: number
  name: string
  lastName: string
  status: Status
  description?: string
  created_at?: string //"2020-10-19T14:41:58.000Z",
  updated_at?: string //"2020-10-19T14:41:58.000Z",
  deleted_at?: string //"2020-10-19T14:41:58.000Z"
}

export interface DepartmentsState {
  page: number
  search: string
  loading: boolean
  error: {} | null
  data: Department[] | null
}

export interface DepartmentDetailsState {
  loading: boolean
  error: {} | null
  data: Department | null
}

export interface EmployeesState {
  page: number
  search: string
  loading: boolean
  error: {} | null
  data: Employe[] | null
}

export interface EmployeDetailsState {
  loading: boolean
  unloading: boolean
  error: {} | null
  data: Employe | null
}

export interface RootStore {
  employees: EmployeesState
  departments: DepartmentsState
  departmentDetails: DepartmentDetailsState
  employeDetails: EmployeDetailsState
  router: any
}

export interface Routes {
  id: string
  path: string
  exact: boolean
  component: JSX.Element
}

export interface DetailsField {
  label: string
  name: string
  disabled: boolean
  vale?: string | number
  onChange: (e?: any) => void
}

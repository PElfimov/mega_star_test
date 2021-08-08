import {RootStore} from "../../../lib/interfaces"
export const selectEmployees = (s: RootStore) => s.employees
export const selectDepartments = (s: RootStore) => s.departments
export const currentPath = (s: RootStore) => s.router.location.pathname

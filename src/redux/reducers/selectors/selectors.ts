import {RootStore} from "../../../lib/interfaces"
export const selectEmployees = (s: RootStore) => s.employees
export const selectDepartments = (s: RootStore) => s.departments
export const currentPath = (s: RootStore) => s.router.location.pathname
export const getDepartmentDetails = (s: RootStore) => s.departmentDetails
export const getEmployeDetails = (s: RootStore) => s.employeDetails

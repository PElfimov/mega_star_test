import {RootStore} from "../../../lib/interfaces"
export const selectEmployees = (s: RootStore) => s.employees
export const selectDepartments = (s: RootStore) => s.departments
export const currentPath = (s: RootStore) => s.router.location.pathname
export const getDepartmentDetails = (s: RootStore) => s.departmentDetails
export const getEmployeDetails = (s: RootStore) => s.employeDetails
export const getEmploye = (s: RootStore) => s.employeDetails.data
export const getEmployeLoading = (s: RootStore) => s.employeDetails.loading
export const getAlert = (s: RootStore) => s.app.alert
export const getBlockedForm = (s: RootStore) => s.app.formIsBlocked

// export const getOldEmploye = createSelector(
//     getEmploye
//     (getEmploye, cities) =>  cities.map((it) => {
//     const filteredOffers = offers.filter((offer) => offer.city.name === it)
//     return Object.assign({}, {city: it, offers: filteredOffers})
//   })
// )

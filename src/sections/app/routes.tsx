import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"
import {Routes as RoutesType} from "../../lib/interfaces"
import {Departments} from "../departments"
import {Employees} from "../employees"
import {DepartmentsDetails} from "../departmentsDetails"
import {Error404} from "../error404"
import {EmployeesDetails} from "../employeesDetails"
import {Details} from "../../components/details"

export const ROUTES_NAME = {
  MAIN: `MAIN`,
  DEPARTMENTS: `DEPARTMENTS`,
  DEPARTMENT_DETAILS: `DEPARTMENT_DETAILS`,
  EMPLOYEES: `EMPLOYEES`,
  EMPLOYEES_DETAILS: `EMPLOYEES_DETAILS`,
  ERROR_404: `ERROR_404`
}

const routes: RoutesType[] = [
  {
    id: ROUTES_NAME.MAIN,
    path: `/`,
    exact: true,
    component: <Departments />
  },
  {
    id: ROUTES_NAME.DEPARTMENTS,
    path: `/departments`,
    exact: true,
    component: <Departments />
  },
  {
    id: ROUTES_NAME.DEPARTMENT_DETAILS,
    path: `/departments/:id`,
    exact: true,
    component: <Details name="departments" />
  },
  {
    id: ROUTES_NAME.EMPLOYEES,
    path: `/employees`,
    exact: true,
    component: <Employees />
  },
  {
    id: ROUTES_NAME.EMPLOYEES_DETAILS,
    path: `/employees/:id`,
    exact: true,
    component: <EmployeesDetails />
  },
  {
    id: ROUTES_NAME.ERROR_404,
    path: `*`,
    exact: true,
    component: <Error404 />
  }
]

export const getRoutingConfig = (id) => {
  const route = routes.find((r) => r.id === id)

  if (route) {
    const {component, ...rest} = route
    return rest
  }
}

export default function Routes() {
  return (
    <Switch>
      {routes.map((r) => {
        const {id, component, ...props} = r
        return <Route key={id} {...props} render={() => component} />
      })}
    </Switch>
  )
}

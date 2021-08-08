import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"
import {Routes as RoutesType} from "../../lib/interfaces"
import {Departments} from "../departments"
import {Employees} from "../employees"
import {DepartmentsDetails} from "../departmentsDetails"
import {Error404} from "../error404"
import {EmployeesDetails} from "../employeesDetails"

const routes: RoutesType[] = [
  {
    id: `main`,
    path: `/`,
    exact: true,
    component: <Departments />
  },
  {
    id: `departments`,
    path: `/departments`,
    exact: true,
    component: <Departments />
  },
  {
    id: `departmentsDetails`,
    path: `/departments/:id`,
    exact: true,
    component: <DepartmentsDetails />
  },
  {
    id: `employees`,
    path: `/employees`,
    exact: true,
    component: <Employees />
  },
  {
    id: `employeesDetails`,
    path: `/employees/:id`,
    exact: true,
    component: <EmployeesDetails />
  },
  {
    id: `error404`,
    path: `*`,
    exact: true,
    component: <Error404 />
  }
]

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

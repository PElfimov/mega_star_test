import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"
import {Routes as RoutesType} from "./lib/interfaces"
import {Departments} from "./sections/departments"
import {Employees} from "./sections/employees"
import {Error404} from "./sections/error404"

const routes: RoutesType[] = [
  {
    id: `main`,
    path: `/`,
    exact: true,
    component: <Departments />
  },
  {
    id: `departments`,
    path: `/departments*`,
    exact: true,
    component: <Departments />
  },
  {
    id: `employees`,
    path: `/employees*`,
    exact: true,
    component: <Employees />
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

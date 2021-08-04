import {Switch, Route} from "react-router-dom"
import {Error404} from "../error404"
import {Table} from "../table"

export function Departments() {
  return (
    <>
      <h3>Departments</h3>
      <Switch>
        <Route exact path="/departments" component={() => <Table />} />
        {/* <Route exact path="/departments*" render={() => <Departments />} />
        <Route exact path="/employees*" render={() => <Employees />} /> */}
        <Route path="*" render={() => <Error404 />} />
      </Switch>
    </>
  )
}

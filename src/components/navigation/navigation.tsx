import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

export function Navigation() {
  return (
    <Nav className="flex-column">
      <Link className={`nav-link`} to="/departments">
        Departments
      </Link>
      <Link className={`nav-link`} to="/employees">
        Employees
      </Link>
    </Nav>
  )
}

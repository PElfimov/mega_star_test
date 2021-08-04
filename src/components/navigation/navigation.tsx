import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

export function Navigation() {
  console.log(window.location.pathname)
  return (
    <Nav variant="pills" className="flex-column" activeKey="1">
      <Nav.Item>
        <Link className={`nav-link active`} to="/departments">
          Departments
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={`nav-link`} to="/employees">
          Employees
        </Link>
      </Nav.Item>
    </Nav>
  )
}

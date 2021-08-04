import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

export function Navigation() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
      <Nav.Link>{/* <Link to="/"> Departments</Link> */}</Nav.Link>
      <Nav.Link>{/* <Link to="/employees">Employees</Link> */}</Nav.Link>
    </Nav>
  )
}

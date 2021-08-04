import {Nav} from "react-bootstrap"

export function Navigation() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
      <Nav.Link eventKey="link-1">Departments</Nav.Link>
      <Nav.Link eventKey="link-2">Employees</Nav.Link>
    </Nav>
  )
}

import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

export function Navigation() {
  const button = [
    {
      name: "Departments",
      path: "/departments",
      isActive: false
    },
    {
      name: "Employees",
      path: "/employees",
      isActive: true
    }
  ]

  return (
    <Nav variant="pills" className="flex-column" activeKey="1">
      {button.map((item) => {
        return (
          <Nav.Item key={item.name}>
            <Link className={`nav-link ${item.isActive && `active`}`} to={item.path}>
              {item.name}
            </Link>
          </Nav.Item>
        )
      })}
    </Nav>
  )
}

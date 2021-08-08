import {Nav} from "react-bootstrap"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {RootStore} from "../../lib/interfaces"
import {matchPath} from "react-router"

export function Navigation() {
  const data = useSelector((s: RootStore) => s.router)
  const activeButton = (path) => matchPath(data.location.pathname, path)
  const button = [
    {
      name: "Departments",
      path: "/departments",
      isActive: false
    },
    {
      name: "Employees",
      path: "/employees",
      isActive: false
    }
  ]

  return (
    <Nav variant="pills" className="flex-column" activeKey="1">
      {button.map((item) => {
        return (
          <Nav.Item key={item.name}>
            <Link className={`nav-link ${activeButton(item.path) && `active`}`} to={item.path}>
              {item.name}
            </Link>
          </Nav.Item>
        )
      })}
    </Nav>
  )
}

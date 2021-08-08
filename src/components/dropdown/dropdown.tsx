import {Dropdown as BootstrapDropdown} from "react-bootstrap"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {RootStore} from "../../lib/interfaces"

interface Props {
  id: number
}

export function Dropdown({id}: Props) {
  const path = useSelector((s: RootStore) => s.router.location.pathname)

  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle size="sm" variant="secondary" />

      <BootstrapDropdown.Menu>
        <Link className={"dropdown-item"} to={`${path}/${id}`}>
          Details
        </Link>
        <BootstrapDropdown.Item as="button">Delete</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  )
}

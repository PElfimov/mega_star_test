import {Dropdown as BootstrapDropdown} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {delDepartment} from "../../redux/reducers/departmentDetails/actions"
import {delEmploye} from "../../redux/reducers/employeDetails/actions"
import {currentPath} from "../../redux/reducers/selectors/selectors"

interface Props {
  id: number
}

export function Dropdown({id}: Props) {
  const path = useSelector(currentPath)
  const dispatch = useDispatch()

  const delElement = (id) => {
    if (path === `/departments`) return delDepartment(id)
    if (path === `/employees`) return delEmploye(id)
  }

  const onClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(delElement(id))
  }

  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle size="sm" variant="secondary" />

      <BootstrapDropdown.Menu>
        <Link className={"dropdown-item"} to={`${path}/${id}`}>
          Details
        </Link>
        <BootstrapDropdown.Item as="button" onClick={onClick}>
          Delete
        </BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  )
}

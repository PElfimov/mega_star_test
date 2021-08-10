import styles from "./table.module.css"
import {Button, Spinner, Table as BootstrapTable} from "react-bootstrap"
import {Dropdown} from "../../../../components/dropdown"
import {useSelector} from "react-redux"
import {selectDepartments} from "../../../../redux/reducers/selectors/selectors"

interface Props {
  onClick: (e?: any) => void
}

export function Table({onClick}: Props) {
  const departments = useSelector(selectDepartments)
  const {loading, data} = departments

  return (
    <>
      {loading && (
        <div className={styles.spinnerWrapper}>
          <Spinner animation="border" />
        </div>
      )}
      {!loading && (
        <BootstrapTable striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <Dropdown id={item.id} />
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </BootstrapTable>
      )}
      <Button variant="primary" onClick={onClick}>
        Add New
      </Button>
    </>
  )
}

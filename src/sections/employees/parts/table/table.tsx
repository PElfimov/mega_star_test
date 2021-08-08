import styles from "./table.module.css"
import {Button, Spinner, Table as BootstrapTable} from "react-bootstrap"

import {useSelector} from "react-redux"
import {selectEmployees} from "../../../../redux/reducers/selectors/selectors"
import {Dropdown} from "../../../../components/dropdown"

export function Table() {
  const {loading, data} = useSelector(selectEmployees)

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
              <th>Last Name</th>
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
                    <td>{item.lastName}</td>
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
      <Button variant="primary">Add New</Button>
    </>
  )
}

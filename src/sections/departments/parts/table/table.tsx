import {Department} from "../../../../lib/interfaces"
import {Button, Table as BootstrapTable} from "react-bootstrap"
import {Dropdown} from "./parts/dropdown"

const DEPARTAMENTS: Department[] = [
  {id: 1, status: "active", name: `Development`, description: `lorem Lorem`},
  {id: 2, status: "active", name: `Staf`, description: `lorem Lorem`},
  {id: 3, status: "active", name: `Counters`, description: `lorem Lorem`}
]

export function Table() {
  return (
    <>
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
          {DEPARTAMENTS.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Dropdown />
                </td>
              </tr>
            )
          })}
        </tbody>
      </BootstrapTable>
      <Button variant="primary">Add New</Button>
    </>
  )
}

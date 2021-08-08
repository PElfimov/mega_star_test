import styles from "./employees.module.css"
import {Table} from "./parts/table"

export function Employees() {
  return (
    <div className={styles.root}>
      <h1>Employees</h1>
      <Table />
    </div>
  )
}

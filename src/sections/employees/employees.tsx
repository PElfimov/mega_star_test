import {useSelector} from "react-redux"
import {selectEmployees} from "../../redux/reducers/employees/selectors"
import styles from "./employees.module.css"

export function Employees() {
  const employees = useSelector(selectEmployees)
  console.log(employees)

  return (
    <div className={styles.root}>
      <h1>Employees</h1>
    </div>
  )
}

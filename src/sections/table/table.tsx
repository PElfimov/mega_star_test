import {Department} from "../../lib/interfaces"
import styles from "./table.module.css"

const DEPARTAMENT: Department[] = [
  {id: 1, status: "active", name: `Development`, description: `lorem Lorem`},
  {id: 2, status: "active", name: `Staf`, description: `lorem Lorem`},
  {id: 3, status: "active", name: `Counters`, description: `lorem Lorem`}
]

export function Table() {
  return (
    <div className={styles.root}>
      <h1>Table</h1>
    </div>
  )
}

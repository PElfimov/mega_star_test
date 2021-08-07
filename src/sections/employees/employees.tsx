import {useEffect} from "react"
import {useDispatch} from "react-redux"
import styles from "./employees.module.css"

export function Employees() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: `LOAD_BLOCK_DATA`})
  }, [])

  return (
    <div className={styles.root}>
      <button
        onClick={() => {
          dispatch({type: `ClICK`})
        }}>
        Button SAGA
      </button>
      <h1>Employees</h1>
    </div>
  )
}

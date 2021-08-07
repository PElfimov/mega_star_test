import {useEffect} from "react"
import {useDispatch, useSelector, RootStateOrAny} from "react-redux"
import styles from "./employees.module.css"

export function Employees() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: `LOAD_BLOCK_DATA`})
  }, [])

  const UsersData = useSelector((store: RootStateOrAny) => store.app.employees)

  console.log("UsersData,", UsersData)

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

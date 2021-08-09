import {useState} from "react"
import {Button, Spinner} from "react-bootstrap"
import {useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {getEmploye, getEmployeLoading} from "../../redux/reducers/selectors/selectors"

import styles from "./employeesDetails.module.css"

export function EmployeesDetails() {
  const loading = useSelector(getEmployeLoading)
  const data = useSelector(getEmploye)
  const [formIsBlocked, setFormIsBlocked] = useState(true)

  function onChangeName(e) {
    const text: string = e.target.value
  }

  function onChangeLastName(e) {
    const text: string = e.target.value
  }

  function onChangeDescription(e) {
    const text: string = e.target.value
  }

  const field: DetailsField[] = [
    {name: `Id`, disabled: true, vale: data?.id, onChange: () => {}},
    {name: `Name`, disabled: formIsBlocked, vale: data?.name, onChange: onChangeName},
    {name: `Last Name`, disabled: formIsBlocked, vale: data?.lastName, onChange: onChangeLastName},
    {name: `Description`, disabled: formIsBlocked, vale: data?.description, onChange: onChangeDescription}
  ]

  return (
    <div className={styles.root}>
      <h3>Employees Details</h3>
      {loading && (
        <div className={styles.spinnerWrapper}>
          <Spinner animation="border" />
        </div>
      )}
      {!loading && <DetailsForm field={field} />}
      <Button
        variant="primary"
        type="button"
        className={`mt-2`}
        onClick={() => {
          setFormIsBlocked(false)
        }}>
        Edit
      </Button>
    </div>
  )
}

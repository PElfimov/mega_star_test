import {useState} from "react"
import {Button, Spinner} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {EMPLOYE_DETAILS} from "../../redux/reducers/employeDetails/actions"
import {getEmploye, getEmployeLoading} from "../../redux/reducers/selectors/selectors"

import styles from "./employeesDetails.module.css"

export function EmployeesDetails() {
  const loading = useSelector(getEmployeLoading)
  const data = useSelector(getEmploye)
  const [formIsBlocked, setFormIsBlocked] = useState(true)
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    console.log({[e.target.name]: e.target.value})
    const value = {...data}
    value[e.target.name] = e.target.value
    dispatch({type: EMPLOYE_DETAILS.PUT, payload: value})
  }

  const field: DetailsField[] = [
    {
      label: `ID`,
      name: `id`,
      disabled: true,
      vale: data?.id,
      onChange: () => {}
    },
    {
      label: `Name`,
      name: `name`,
      disabled: formIsBlocked,
      vale: data?.name,
      onChange: onChangeHandler
    },
    {
      label: `Last Name`,
      name: `lastName`,
      disabled: formIsBlocked,
      vale: data?.lastName,
      onChange: onChangeHandler
    },
    {
      label: `Description`,
      name: `description`,
      disabled: formIsBlocked,
      vale: data?.description,
      onChange: onChangeHandler
    }
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

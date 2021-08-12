import {Spinner} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {blockedForm} from "../../redux/reducers/app/actions"
import {saveEmploye, updateEmploye} from "../../redux/reducers/employeDetails/actions"
import {getBlockedForm, getEmploye, getEmployeLoading} from "../../redux/reducers/selectors/selectors"

import styles from "./employeesDetails.module.css"
import {history} from "./../../redux/reducers/index"
import {ButtonGroup} from "../../components/buttonGroup/buttonGroup"

export function EmployeesDetails() {
  const loading = useSelector(getEmployeLoading)
  const data = useSelector(getEmploye)
  const formIsBlocked = useSelector(getBlockedForm)
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    const value = {...data}
    value[e.target.name] = e.target.value
    dispatch(updateEmploye(value))
  }
  const onCancel = (event) => {
    dispatch(blockedForm())
    history.push(`/employees`)
  }

  const onSave = (event) => {
    dispatch(saveEmploye(data))
  }

  const field: DetailsField[] = [
    {
      label: `ID`,
      name: `id`,
      disabled: true,
      vale: data?.id,
      onChange: onChangeHandler
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
  let HTML: JSX.Element = <DetailsForm field={field} />
  if (loading) HTML = <Spinner animation="border" />

  return (
    <div className={styles.root}>
      <h3>Employees Details</h3>
      {HTML}
      <ButtonGroup onCancel={onCancel} onSave={onSave} />
    </div>
  )
}

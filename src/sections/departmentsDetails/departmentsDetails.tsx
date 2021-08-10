import {Spinner} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {getBlockedForm, getDepartmentDetails} from "../../redux/reducers/selectors/selectors"
import styles from "./departmentsDetails.module.css"
import {history} from "./../../redux/reducers/index"
import {blockedForm} from "../../redux/reducers/app/actions"
import {saveDepartment, updateDepartment} from "./../../redux/reducers/departmentDetails/actions"
import {ButtonGroup} from "../../components/buttonGroup"

export function DepartmentsDetails() {
  const {data, loading} = useSelector(getDepartmentDetails)
  const formIsBlocked = useSelector(getBlockedForm)
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    const value = {...data}
    value[e.target.name] = e.target.value
    dispatch(updateDepartment(value))
  }
  const onCancel = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(blockedForm())
    history.push(`/departments`)
  }

  const onSave = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(saveDepartment(data))
  }

  const field: DetailsField[] = [
    {
      label: `Id`,
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
      <h3>Departments Details</h3>
      {HTML}
      <ButtonGroup onCancel={onCancel} onSave={onSave} />
    </div>
  )
}

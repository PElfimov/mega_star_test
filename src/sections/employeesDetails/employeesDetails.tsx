import {useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {getDepartmentDetails} from "../../redux/reducers/selectors/selectors"
import styles from "./employeesDetails.module.css"

export function EmployeesDetails() {
  const {data} = useSelector(getDepartmentDetails)

  const field: DetailsField[] = [
    {name: `Id`, disabled: true, vale: data?.id, onChange: () => {}},
    {name: `Name`, disabled: true, vale: data?.name, onChange: () => {}},
    {name: `Last Name`, disabled: true, vale: "", onChange: () => {}},
    {name: `Description`, disabled: true, vale: data?.description, onChange: () => {}}
  ]

  return (
    <div className={styles.root}>
      <h1>EmployeesDetails</h1>
      <DetailsForm field={field} />
    </div>
  )
}

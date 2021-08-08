import {Spinner} from "react-bootstrap"
import {useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {getEmployeDetails} from "../../redux/reducers/selectors/selectors"

import styles from "./employeesDetails.module.css"

export function EmployeesDetails() {
  const {data, loading} = useSelector(getEmployeDetails)

  const field: DetailsField[] = [
    {name: `Id`, disabled: true, vale: data?.id, onChange: () => {}},
    {name: `Name`, disabled: true, vale: data?.name, onChange: () => {}},
    {name: `Last Name`, disabled: true, vale: data?.lastName, onChange: () => {}},
    {name: `Description`, disabled: true, vale: data?.description, onChange: () => {}}
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
    </div>
  )
}

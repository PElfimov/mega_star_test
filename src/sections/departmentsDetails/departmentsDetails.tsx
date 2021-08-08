import {Spinner} from "react-bootstrap"
import {useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {getDepartmentDetails} from "../../redux/reducers/selectors/selectors"
import styles from "./departmentsDetails.module.css"

export function DepartmentsDetails() {
  const {data, loading} = useSelector(getDepartmentDetails)

  const field: DetailsField[] = [
    {name: `Id`, disabled: true, vale: data?.id, onChange: () => {}},
    {name: `Name`, disabled: true, vale: data?.name, onChange: () => {}},
    {name: `Status`, disabled: true, vale: data?.status, onChange: () => {}},
    {name: `Description`, disabled: true, vale: data?.description, onChange: () => {}}
  ]
  console.log(field)
  return (
    <div className={styles.root}>
      <h3>Departments Details</h3>
      {loading && (
        <div className={styles.spinnerWrapper}>
          <Spinner animation="border" />
        </div>
      )}
      {!loading && <DetailsForm field={field} />}
    </div>
  )
}

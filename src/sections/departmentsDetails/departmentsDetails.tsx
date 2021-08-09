import {Spinner} from "react-bootstrap"
import {useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {DetailsField} from "../../lib/interfaces"
import {getDepartmentDetails} from "../../redux/reducers/selectors/selectors"
import styles from "./departmentsDetails.module.css"

export function DepartmentsDetails() {
  const {data, loading} = useSelector(getDepartmentDetails)

  const field: DetailsField[] = [
    {
      label: `Id`,
      name: `id`,
      disabled: true,
      vale: data?.id,
      onChange: () => {}
    },
    {
      label: `Name`,
      name: `name`,
      disabled: true,
      vale: data?.name,
      onChange: () => {}
    },
    {
      label: `Description`,
      name: `description`,
      disabled: true,
      vale: data?.description,
      onChange: () => {}
    }
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

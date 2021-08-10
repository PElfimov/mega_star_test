import {useState} from "react"
import {Button} from "react-bootstrap"
import {useDispatch} from "react-redux"
import {DetailsForm} from "../../../../components/detailsForm"
import {DetailsField} from "../../../../lib/interfaces"
import styles from "./newItem.module.css"
import {saveNewDepartment} from "../../../../redux/reducers/departmentDetails/actions"

interface Props {
  onClick: (e?: any) => void
}

export function NewItem({onClick}: Props) {
  const dispatch = useDispatch()
  const [state, setState] = useState({id: null, name: "", lastName: "", description: ""})

  const onChangeHandler = (e) => {
    setState((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const onSave = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(saveNewDepartment(state))
  }

  const field: DetailsField[] = [
    {
      label: `Name`,
      name: `name`,
      disabled: false,
      vale: state.name,
      onChange: onChangeHandler
    },
    {
      label: `Description`,
      name: `description`,
      disabled: false,
      vale: state.description,
      onChange: onChangeHandler
    }
  ]

  return (
    <div className={styles.root}>
      <h3>New</h3>
      <DetailsForm field={field} />
      <Button variant="primary" type="button" className={`m-2`} onClick={onClick}>
        Back
      </Button>
      <Button variant="primary" type="button" className={`m-2`} onClick={onSave}>
        Save
      </Button>
    </div>
  )
}

import {Alert as AlertComponent} from "react-bootstrap"
import {Alert as AlertType} from "../../lib/interfaces"
import styles from "./alert.module.css"

interface Props {
  alert: AlertType
}

export function Alert({alert}: Props) {
  return (
    <AlertComponent className={styles.root} variant={alert.type}>
      {alert.text}
    </AlertComponent>
  )
}

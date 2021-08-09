import {Alert as AlertComponent} from "react-bootstrap"
import styles from "./alert.module.css"

interface Props {
  text: string
  type?: "success" | "danger" | "warning"
}

export function Alert({text, type = `warning`}: Props) {
  return (
    <AlertComponent className={styles.root} variant={type}>
      {text}
    </AlertComponent>
  )
}

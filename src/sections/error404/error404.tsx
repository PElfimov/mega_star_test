import styles from "./error404.module.css"

export function Error404() {
  return (
    <div className={styles.root}>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </div>
  )
}

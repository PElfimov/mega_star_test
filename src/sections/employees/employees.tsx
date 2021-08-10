import {useState} from "react"
import {NewItem} from "../newItem/newItem"
import {Table} from "./parts/table"

export function Employees() {
  const [isShowNewItem, setIsShowNewItem] = useState(false)

  const onClick = () => {
    setIsShowNewItem(!isShowNewItem)
  }
  return (
    <>
      <h3>Employees</h3>
      {!isShowNewItem && <Table onClick={onClick} />}
      {isShowNewItem && <NewItem onClick={onClick} />}
    </>
  )
}

import {useState} from "react"
import {NewItem} from "./parts/newItem/newItem"
import {Table} from "./parts/table"

export function Departments() {
  const [isShowNewItem, setIsShowNewItem] = useState(false)

  const onClick = () => {
    setIsShowNewItem(!isShowNewItem)
  }

  return (
    <>
      {!isShowNewItem && <Table onClick={onClick} />}
      {isShowNewItem && <NewItem onClick={onClick} />}
    </>
  )
}

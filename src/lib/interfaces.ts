export interface Department {
  id: number
  name: string
  status: "inactive" | "active"
  description?: string
  created_at?: string //"2020-10-19T14:41:58.000Z",
  updated_at?: string //"2020-10-19T14:41:58.000Z",
  deleted_at?: string //"2020-10-19T14:41:58.000Z"
}

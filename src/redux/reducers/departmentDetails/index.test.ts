import {updateDepartment} from "./actions"
import {DEPARTMENT_DETAILS} from "./types"

describe(`Actions creator returns right action`, () => {
  it(`for changing departmet object`, () => {
    const data = {
      name: `Some name`,
      type: `action`
    }
    const action = updateDepartment(data)

    expect(action).toEqual({
      type: DEPARTMENT_DETAILS.PUT,
      payload: {
        name: `Some name`,
        type: `action`
      }
    })
  })
})

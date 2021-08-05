import {ActionType} from "../../actions/action-creator/action-creator"

const externalState = {
  // offers: [],
  // isAuthorizationRequired: false,
  // login: null,
  departments: []
}

const reducer = (state = externalState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DEPARTMENTS:
      return Object.assign({}, state, {
        departments: action.payload
      })
    default:
      return state
  }
}

export default reducer

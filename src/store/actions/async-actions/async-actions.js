import {ModelDepartment} from "../../model-department/model-department"
import {ActionCreator} from "../action-creator/action-creator"

const Operation = {
  loadDepartments: () => (dispatch, _, api) => {
    return api.get(`/departments`).then((response) => {
      console.log("response", response)
      const reviews = ModelDepartment.parseDepartments(response.data)
      dispatch(ActionCreator.loadDepartments(reviews))
    })
  }
  // addReview: (hotelId, rating, comment, unblockedForm, addResponseErr) => (dispatch, _, api) => {
  //   return api
  //     .post(`/comments/${hotelId}`, {
  //       rating,
  //       comment
  //     })
  //     .then((response) => {
  //       const reviews = ModelReviews.parseReviews(response.data)
  //       unblockedForm()
  //       dispatch(ActionCreator.loadReviews(reviews))
  //     })
  //     .catch((response) => {
  //       addResponseErr(response)
  //     })
  // },
  // favoriteHotelHandler: (id, status, history) => (dispatch, getState, api) => {
  //   const convertStatus = Number(status)
  //   return api.post(`/favorite/${id}/${convertStatus}`).then((response) => {
  //     if (!response.isAxiosError) {
  //       const state = getState()
  //       const {offers} = state.externalData

  //       const updatePlaces = offers.map((item) => {
  //         if (item.id === response.data.id) {
  //           const element = Object.assign({}, item)
  //           element.isFavorite = !item.isFavorite
  //           return element
  //         } else {
  //           return item
  //         }
  //       })
  //       dispatch(ActionCreator.loadOffers(updatePlaces))
  //     } else {
  //       history.push(`/login`)
  //     }
  //   })
  // }
}

export default Operation

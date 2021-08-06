import {
  residentsAPI
} from "../api/api"

const SET_RESIDENTS = 'SET_RESIDENTS'
const CLOSE_POPUP = 'CLOSE_POPUP'
const OPEN_FORM = 'OPEN_FORM'
const CLOSE_FORM = 'CLOSE_FORM'

export const setResidents = arr => {
  return {
    type: SET_RESIDENTS,
    payload: arr
  }
}

export const openForm = () => {
  return {
    type: OPEN_FORM
  }
}

export const closeForm = () => {
  return {
    type: CLOSE_FORM
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}

const initialState = {
  residents: [],
  isPopupOpen: false,
  isPopupFormOpen: false
}

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESIDENTS:
      return {
        ...state, residents: action.payload, isPopupOpen: true
      }
      case CLOSE_POPUP:
        return {
          ...state, isPopupOpen: false
        }
        case OPEN_FORM:
          return {
            ...state, isPopupFormOpen: true
          }
          case CLOSE_FORM:
            return {
              ...state, isPopupFormOpen: false
            }
            default:
              return state
  }
}

export const postResidentThunk = (currentFlat, resident) => {
  residentsAPI.postResident(resident).then(response => {
    debugger
    residentsAPI.putResident(currentFlat, response.data.id)
  })
}

export const deleteResidentThunk = id => dispatch => {
  residentsAPI.deleteResident(id)
}
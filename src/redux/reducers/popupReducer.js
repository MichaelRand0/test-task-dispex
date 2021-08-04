const SET_RESIDENTS = 'SET_RESIDENTS'
const CLOSE_POPUP = 'CLOSE_POPUP'

export const setResidents = arr => {
  return {
    type: SET_RESIDENTS,
    payload: arr
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}

const initialState = {
  residents: [],
  isPopupOpen: false
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
        default:
          return state
  }
}
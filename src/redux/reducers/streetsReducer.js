import {
  housingAPI
} from "../api/api"

const initialState = {
  streetsArr: [],
  currentStreet: null,
}

const SET_STREETS = 'SET_STREETS'
const TOGGLE_STREET_MENU = 'TOGGLE_STREET_MENU'
const SET_CURRENT_STREET = 'SET_CURRENT_STREET'

export const setStreets = arr => {
  return {
    type: SET_STREETS,
    payload: arr
  }
}

export const setCurrentStreet = id => {
  return {
    type: SET_CURRENT_STREET,
    payload: id
  }
}

export const toggleStreetMenu = id => {
  return {
    type: TOGGLE_STREET_MENU,
    payload: id
  }
}

export const streetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREETS:
      return {
        ...state, streetsArr: action.payload
      }
      case TOGGLE_STREET_MENU:
        const currentStreets = [...state.streetsArr]
        const updatedStreets = currentStreets.map(item => {
          if (item.streetId == action.payload) {
            return {
              ...item,
              isOpen: !item.isOpen
            }
          }
          return item
        })
        return {
          ...state, streetsArr: updatedStreets
        }
        case SET_CURRENT_STREET:
          return {
            ...state, currentStreet: action.payload
          }

          default:
            return state
  }
}

export const getStreetsThunk = companyId => dispatch => {
  housingAPI.getStreets(companyId).then(response => {
    const newStreetsArr = []
    let currentStreet = null
    response.data.forEach(item => {
      if (currentStreet != item.streetId) {
        currentStreet = item.streetId
        newStreetsArr.push({
          streetId: item.streetId,
          streetName: item.streetName,
          houses: [],
          isOpen: false
        })
      }
    })
    dispatch(setStreets(newStreetsArr))
  })
}
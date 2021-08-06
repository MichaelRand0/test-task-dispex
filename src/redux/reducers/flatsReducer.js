import {
  housingAPI
} from './../api/api'

const SET_FLATS = 'SET_FLATS'
const SET_CURRENT_FLAT = 'SET_CURRENT_FLAT'

const initialState = {
  flatsArr: [],
  currentFlat: null
}

export const setFlats = (streetId, houseId, arr) => {
  return {
    type: SET_FLATS,
    payload: {
      streetId,
      houseId,
      arr
    }
  }
}

export const setCurrentFlat = id => {
  return {
    type: SET_CURRENT_FLAT,
    payload: id
  }
}

export const flatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_FLAT:
      return {
        ...state, currentFlat: action.payload
      }
      case SET_FLATS:
        return {
          ...state, flatsArr: action.payload.arr
        }
        default:
          return state
  }
}

export const getFlatsThunk = (companyId, streetId, houseId) => dispatch => {
  housingAPI.getFlats(companyId, streetId, houseId).then(response => {
    const flats = []
    response.data.forEach(item => {
      if (houseId == item.houseId) {
        flats.push({
          addressId: item.addressId,
          clients: item.clients,
          flat: item.flat
        })
      }
    })
    dispatch(setFlats(streetId, houseId, flats))
  })
}
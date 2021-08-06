import {
  housingAPI
} from './../api/api';
const SET_HOUSES = 'SET_HOUSES'
const SET_CURRENT_HOUSE = 'SET_CURRENT_HOUSE'
const TOGGLE_HOUSE_MENU = 'TOGGLE_HOUSE_MENU'

const initialState = {
  currentHouse: null,
  housesArr: []
}

export const setHouses = (id, arr) => {
  return {
    type: SET_HOUSES,
    payload: {
      id,
      arr
    }
  }
}

export const setCurrentHouse = id => {
  return {
    type: SET_CURRENT_HOUSE,
    payload: id
  }
}

export const toggleHouseMenu = (streetId, houseId) => {
  return {
    type: TOGGLE_HOUSE_MENU,
    payload: {
      streetId,
      houseId
    }
  }
}

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_HOUSE:
      return {
        ...state, currentHouse: action.payload
      }
      case TOGGLE_HOUSE_MENU:
        const updatedHouses = state.housesArr.map(item => {
          if (item.houseId == action.payload.houseId) {
            return {
              ...item,
              isOpen: !item.isOpen
            }
          }
          return item
        })
        return {
          ...state, housesArr: updatedHouses
        }
        case SET_HOUSES:
          return {
            ...state,
            housesArr: action.payload.arr
          }

          default:
            return state
  }
}

export const getHousesThunk = (companyId, streetId) => dispatch => {
  return housingAPI.getHouses(companyId, streetId).then(response => {
    let currentHouse = null
    const newStreetsArr = []
    response.data.forEach(item => {
      if (currentHouse != item.houseId) {
        currentHouse = item.houseId
        newStreetsArr.push({
          houseId: item.houseId,
          building: item.building,
          flats: [],
          isOpen: false
        })
      }
    })
    dispatch(setHouses(streetId, newStreetsArr))
  })
}
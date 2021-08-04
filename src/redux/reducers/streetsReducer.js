import {
  housingAPI
} from "../api/api"

const initialState = {
  streetsArr: []
}

const SET_STREETS = 'SET_STREETS'
const TOGGLE_STREET_MENU = 'TOGGLE_STREET_MENU'
const TOGGLE_HOUSE_MENU = 'TOGGLE_HOUSE_MENU'
const SET_HOUSES = 'SET_HOUSES'
const SET_FLATS = 'SET_FLATS'

export const setStreets = arr => {
  return {
    type: SET_STREETS,
    payload: arr
  }
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

export const toggleStreetMenu = id => {
  return {
    type: TOGGLE_STREET_MENU,
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
        case TOGGLE_HOUSE_MENU:
          const updatedHousesOfStreets = state.streetsArr.map(item => {
            if (item.streetId == action.payload.streetId) {
              return {
                ...item,
                houses: item.houses.map(house => {
                  if (house.houseId == action.payload.houseId) {
                    return {
                      ...house,
                      isOpen: !house.isOpen
                    }
                  }
                  return house
                })
              }
            }
            return item
          })
          return {
            ...state, streetsArr: updatedHousesOfStreets
          }
          case SET_HOUSES:
            const updatedHousesOfStreet = state.streetsArr.map(item => {
              if (item.streetId == action.payload.id) {
                return {
                  ...item,
                  houses: action.payload.arr
                }
              }
              return item
            })
            return {
              ...state,
              streetsArr: updatedHousesOfStreet
            }
            case SET_FLATS:
              const updatedFlatsOfHouse = state.streetsArr.map(item => {
                if (item.streetId == action.payload.streetId) {
                  return {
                    ...item,
                    houses: item.houses.map(house => {
                      if (house.houseId == action.payload.houseId) {
                        return {
                          ...house,
                          flats: action.payload.arr
                        }
                      }
                      return house
                    })
                  }
                }
                return item
              })
              return {
                ...state, streetsArr: updatedFlatsOfHouse
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

export const getHousesThunk = (companyId, streetId) => dispatch => {
  housingAPI.getHouses(companyId, streetId).then(response => {
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
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import  thunkMiddleware from 'redux-thunk'
import { companiesReducer } from './reducers/companiesReducer'
import { flatsReducer } from './reducers/flatsReducer'
import { housesReducer } from './reducers/housesReducer'
import { popupReducer } from './reducers/popupReducer'
import { streetsReducer } from './reducers/streetsReducer'

const combinedReducers = combineReducers({
  companies: companiesReducer,
  streets: streetsReducer,
  houses: housesReducer,
  flats: flatsReducer,
  popup: popupReducer
})
export const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))

window.store = store
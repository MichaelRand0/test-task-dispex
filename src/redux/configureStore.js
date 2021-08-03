import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import  thunkMiddleware from 'redux-thunk'
import { companiesReducer } from './reducers/companiesReducer'
import { streetsReducer } from './reducers/streetsReducer'

const combinedReducers = combineReducers({
  companies: companiesReducer,
  streets: streetsReducer
})
export const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))

window.store = store
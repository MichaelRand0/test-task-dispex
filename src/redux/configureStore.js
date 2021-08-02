import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import  thunkMiddleware from 'redux-thunk'
import { companiesReducer } from './reducers/companiesReducer'

const combinedReducers = combineReducers({
  companies: companiesReducer
})
export const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))

window.store = store
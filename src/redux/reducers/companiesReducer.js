import { companiesAPI } from "../api/api"

const initialState = {
  companyId: null,
  companiesArr: []
}

export const CHANGE_COMPANY_ID = 'CHANGE_COMPANY_ID'
export const SET_COMPANIES = 'SET_COMPANIES'

export const changeCompanyId = id => {
  return {
    type: CHANGE_COMPANY_ID,
    payload: id
  }
}

export const setCompanies = arr => {
  return {
    type: SET_COMPANIES,
    payload: arr
  }
}

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMPANY_ID:
      return {...state, companyId: action.payload}
    
    case SET_COMPANIES:
      return {...state, companiesArr: action.payload}
  
    default:
      return state
  }
}

export const getCompaniesThunk = () => dispatch => {
  companiesAPI.getCompanies().then(response => {
    dispatch(setCompanies(response.data))
  })
}
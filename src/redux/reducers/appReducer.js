const initialState = {
  isLoading: false
}

const SET_IS_LOADING_TRUE = 'SET_IS_LOADING_TRUE'
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE'

export const setIsLoadingTrue = () => {
  return {
    type: SET_IS_LOADING_TRUE
  }
}

export const setIsLoadingFalse = () => {
  return {
    type: SET_IS_LOADING_FALSE
  }
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_TRUE:
      return {
        ...state, isLoading: true
      }
      case SET_IS_LOADING_FALSE:
        return {
          ...state, isLoading: false
        }
          default:
            return state
  }
}
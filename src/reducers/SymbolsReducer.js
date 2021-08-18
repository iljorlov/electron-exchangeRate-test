import { SYMBOLS_FAIL, SYMBOLS_LOADING, SYMBOLS_SUCCESS } from "../actions/CurrencyActionTypes";


export const symbolsReducer = (state = {}, action) => {
  switch (action.type) {
    case SYMBOLS_FAIL:
      return {
        loading: true
      }  
    case SYMBOLS_LOADING:
      return {
        loading: true
      }  
    case SYMBOLS_SUCCESS:
      return {
        loading: false,
        symbols: action.payload
      }  
    default:
      return state
  }
}



import { CURRENCIES_FAIL, CURRENCIES_LOADING, CURRENCIES_SUCCESS } from "../actions/CurrencyActionTypes";


export const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCIES_FAIL:
      return {
        loading: true
      }  
    case CURRENCIES_LOADING:
      return {
        loading: true
      }  
    case CURRENCIES_SUCCESS:
      return {
        loading: false,
        currencies: action.payload
      }  
    default:
      return state
  }
}



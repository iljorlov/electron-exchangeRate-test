import { CURRENCY_CODES_FAIL, CURRENCY_CODES_LOADING, CURRENCY_CODES_SUCCESS } from "../actions/CurrencyActionTypes";


export const currencyCodesReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_CODES_FAIL:
      return {
        loading: true
      }  
    case CURRENCY_CODES_LOADING:
      return {
        loading: true
      }  
    case CURRENCY_CODES_SUCCESS:
      return {
        loading: false,
        currencyCodes: action.payload
      }  
    default:
      return state
  }
}



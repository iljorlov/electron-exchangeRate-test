import axios from "axios";
import { CURRENCIES_LOADING, CURRENCIES_FAIL, CURRENCIES_SUCCESS, SYMBOLS_FAIL, SYMBOLS_LOADING, SYMBOLS_SUCCESS, CURRENCY_CODES_FAIL, CURRENCY_CODES_LOADING, CURRENCY_CODES_SUCCESS } from './CurrencyActionTypes'
import ratesJSON from './rates.json'
import symbolsJSON from './symbols.json'
import currencyCodesJSON from './currencyCodes.json'



// move to .env
const api_key = 'da6737a78e89f511b9324952353102e8'

export const GetRates = async (dispatch) => {


  try {
    dispatch({
      type: CURRENCIES_LOADING
    })

    const res = await axios.get(`http://data.fixer.io/api/latest?access_key=${api_key}`)

    // there is a copy of json above in 'public folder' due to very limited number of API-call the app can make with my api-key
    // const res = ratesJSON

    dispatch({
      type: CURRENCIES_SUCCESS,
      // select another payload to connect to API
      payload: res.data, // use this if fetching data from API
      // payload: res  // use this if gettig data from local JSON file
    })

  } catch(e) {
    dispatch({
      type: CURRENCIES_FAIL
    })
  }
}

export const GetSymbols = async (dispatch) => {

  try {
    dispatch({
      type: SYMBOLS_LOADING
    })

    const res = await axios.get(`http://data.fixer.io/api/symbols?access_key=${api_key}`)

    // there is a copy of json above in 'public folder' due to very limited number of API-call the app can make with my api-key
    // const res = symbolsJSON

    dispatch({
      type: SYMBOLS_SUCCESS,
      // select another payload to connect to API
      payload: res.data,  // use this if fetching data from API
      // payload: res  // use this if gettig data from local JSON file
    })

  } catch(e) {
    dispatch({
      type: SYMBOLS_FAIL
    })
  }
}


export const GetCurrencyCodes = async (dispatch) => {
  try {
    dispatch({
      type: CURRENCY_CODES_LOADING
    })

    const res = currencyCodesJSON

    dispatch({
      type: CURRENCY_CODES_SUCCESS,
      payload: res
    })

  } catch(e) {
    dispatch({
      type: CURRENCY_CODES_FAIL
    })
  }
}


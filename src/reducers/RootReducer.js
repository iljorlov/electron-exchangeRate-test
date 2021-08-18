import { combineReducers } from "redux";
import { currencyCodesReducer } from "./CurrencyCodesReducer";
import { currencyReducer } from "./CurrencyReducer";
import { symbolsReducer } from "./SymbolsReducer";

const RootReducer = combineReducers({
  currenciesData: currencyReducer,
  symbolsData: symbolsReducer,
  currencyCodesData: currencyCodesReducer,
})

export default RootReducer
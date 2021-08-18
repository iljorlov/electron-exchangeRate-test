import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CountriesContainer } from './CountriesContainer'
import { v4 as uuid } from 'uuid'

export const Currency = () => {

  // currency - data that goes to selection bar
  const [currency, setCurrency] = useState('')
  // data to pass to children components
  const [data, setData] = useState([])

  const currenciesData = useSelector(state => state.currenciesData)
  const symbolsData = useSelector(state => state.symbolsData)
  const currencyCodesData = useSelector(state => state.currencyCodesData)

  // check if data from APIs is loaded
  const loadingFinished = (
    currenciesData.loading!==undefined 
    && symbolsData.loading!==undefined 
    && currencyCodesData.loading!==undefined  
    && (!currenciesData.loading && !symbolsData.loading && !currencyCodesData.loading)
  )

  

  // change the scructure of the data to be able to map over it in JSX
  let rates = []
  let symbols = []
  let codes = []
  if (loadingFinished){
    for (let i in currenciesData.currencies.rates){
      rates.push( {symbol: i, rate: currenciesData.currencies.rates[i]} )
    }

    for (let i in currencyCodesData.currencyCodes){
      codes.push({symbol: currencyCodesData.currencyCodes[i], code: i})
    }

    for (let i in symbolsData.symbols.symbols){
      symbols.push({currency_name: symbolsData.symbols.symbols[i], symbol: i})
    }
  }


  // get a value for a flag
  const getCountryCodes = (symbol) => {
    try {
      return codes.filter(item => item.symbol === symbol)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelection = (e) => {
    e.preventDefault()
    setCurrency(e.target.value)
    setData([getCountryCodes(e.target.value), rates.filter(rate => rate.symbol === e.target.value)])
  }

  if (loadingFinished) {
    return (
      <div className='currency-app-container'>
        <div className='selection-container'>
          <label>Select currency to get exchange rate:</label>
            <select id="filter-type" value={currency} onChange={(e) => handleSelection(e)}>
              {symbols.map(country => {
                return(
                  <option key={uuid()} value={country.symbol}>{country.currency_name}</option>
                )
              })}
            </select>
        </div>
        
        { currency !=='' &&  
          <CountriesContainer 
            data={data}  
            currencyName={symbols.filter(item => item.symbol === currency)[0].currency_name} 
          />}

      </div>
    )
  } else{
    return (
      <div className='loader-container'>Loading data...</div>
    )
  }
  
}

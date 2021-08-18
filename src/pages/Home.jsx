import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetCurrencyCodes, GetRates, GetSymbols } from '../actions/CurrencyActions'
import { Currency } from '../components/Currency'


export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetRates)
    dispatch(GetSymbols)
    dispatch(GetCurrencyCodes)
  }, [dispatch])

  return (
    <div className='homepage'>
      <Currency />
    </div>
  )
}

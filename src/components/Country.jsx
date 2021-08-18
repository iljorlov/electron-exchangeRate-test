import React from 'react'
import { Flag } from './Flag'

export const Country = ({country, rates, currencyName}) => {
  return (
    <div>
      <div className="currency-info">
          <Flag code={country.code.toLowerCase()}/>
          <div className="currency-data-entry">{country.code}</div>
          <div className="currency-data-entry">{currencyName}</div>
          <div className="currency-data-entry"> {rates.rate} euro</div>
      </div>
    </div>
  )
}

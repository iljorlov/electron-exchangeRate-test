import React from 'react'
import noFlag from '../svg/noFlag.svg'

export const NonCountry = ({rates}) => {
  return (
    <div>
      <div className="currency-info">
          <div className="flag-container">
            <img src={noFlag} alt="flag image" />
          </div>
          <div className="currency-data-entry">{rates.symbol}</div>
          <div className="currency-data-entry"> {rates.rate} euro</div>
      </div>
    </div>
  )
}
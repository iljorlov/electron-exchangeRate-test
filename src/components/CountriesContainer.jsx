import React from 'react'
import { Country } from './Country'
import { NonCountry } from './NonCountry'
import { v4 as uuid } from 'uuid'


export const CountriesContainer = ({ data, currencyName }) => {

  return (
    <>
      {data[0].length > 0 &&
      <div className='countries'>
        {data[0].map(country => (
          <Country key={uuid()} country={country} rates={data[1][0]} currencyName={currencyName} />
        ))}
      </div>}

      {/* if there is no data about the currency in http://country.io/currency.json   */}
      {data[0].length === 0 &&
      <div className="non-countries">
        <NonCountry rates={data[1][0]} />
      </div>
      }
    </>
  )
}

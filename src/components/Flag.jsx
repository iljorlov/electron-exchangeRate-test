import React from 'react'
import axios from 'axios'

export const Flag = ({code}) => {

  return (
    <div className="flag-container">
      <img
        src={`https://flagcdn.com/${code}.svg` }
        width="30"
        alt="South Africa" 
      />
    </div>
  )
}

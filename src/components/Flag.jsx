import React from 'react'

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

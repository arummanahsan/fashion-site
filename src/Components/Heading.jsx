import React from 'react'

const Heading = ({headLine, className}) => {
  return (
    <h1 className={`${className}`}>{headLine}</h1>
  )
}

export default Heading
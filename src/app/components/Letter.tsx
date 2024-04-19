import React from 'react'

const Letter = ({children}: {children: any}) => {
  return (
    <>
        {children == " " ? '\u00A0' : children }
    </>
  )
}

export default Letter

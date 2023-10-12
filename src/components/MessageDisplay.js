import React from 'react'

export default function MessageDisplay ({ message, action }) {

  return (
    <>
      <h3>{message}</h3>
      <button onClick={action}>Try Again</button>
    </>)
}

import React from 'react'

const Error = props => {
  return (
    <div>
     { props.error && <p id="error">User not found.</p> }
    </div>
  )
}

export default Error;

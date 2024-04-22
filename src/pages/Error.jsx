import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        Error... Page not found<br></br>
        <NavLink style={{color: 'black', fontSize: '50px', borderBottom: '2px solid'}} to='/toystore-react/'>Return home</NavLink>
    </div>
  )
}

export default Error
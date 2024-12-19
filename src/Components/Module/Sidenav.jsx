import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='side'>
    <ul>
      <Link to={'/tv'}>TV</Link><br/>
      <Link to={'/headphone'}>Headphones</Link><br/>
      <Link to={'/speakers'}>Speaker</Link><br/>
    </ul>
  </div>
  )
}
export default Sidenav




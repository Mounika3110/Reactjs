import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className='row signup'>
      <div className='col-md-6  cosignup'>
      <h2>Signup</h2>
      <form action=''>
        <input type="email" placeholder='Enter email'  />
        <input type="password" placeholder='Enter Password' />
        <input type="password" placeholder='Enter Confirm Password'/>
      </form>
      <Link to={"/"}><button type="button" class="btn btn-outline-primary w-25 m-2" >Signup</button></Link>
    </div>
    </div>
  )
}
export default Signup

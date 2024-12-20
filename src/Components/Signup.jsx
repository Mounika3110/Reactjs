import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2 className='signup-heading'>Create an Account</h2>
        <form className='form'>
          <div className='form-group'>
            <input 
              type="email" 
              placeholder='Enter your email'  
              className='form-input'
              required 
            />
          </div>
          <div className='form-group'>
            <input 
              type="password" 
              placeholder='Enter your password' 
              className='form-input'
              required 
            />
          </div>
          <div className='form-group'>
            <input 
              type="password" 
              placeholder='Confirm your password' 
              className='form-input'
              required 
            />
          </div>
          <div className='form-action'>
<<<<<<< HEAD
            <Link to={"/Reactwork"}>
=======
            <Link to={"/"}>
>>>>>>> c3747f4d38444127e3b2045a9f77de9216d60bf7
              <button type="submit" className="btn btn-primary w-100">Signup</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

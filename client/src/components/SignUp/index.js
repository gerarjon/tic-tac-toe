import React, { useState } from 'react';

const SignUp = () => {
  const [user, setUser] = useState(null);

  const signUp = () => {

  }

  return (
    <div className='container'>
      <div style={{ fontSize: 20 }}>Sign Up</div>
      
      {/* First Name */}
      <div className="field">
        <label className='label'>First Name</label>
        <div className='control'>
          <input 
            className="input"
            placeholder='First Name'
            type='text'
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }} 
          />
        </div>
      </div>

      {/* Last Name */}
      <div className="field">
        <label className='label'>Last Name</label>
        <div className='control'>
          <input 
            className="input"
            placeholder='Last Name'
            type='text'
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }} 
          />
        </div>
      </div>

      {/* Username */}
      <div className="field">
        <label className='label'>Username</label>
        <div className='control'>
          <input 
            className="input"
            placeholder='Username'
            type='text'
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }} 
          />
        </div>
      </div>

      {/* Password */}
      <div className="field">
        <label className='label'>Password</label>
        <div className='control'>
          <input 
            className="input"
            placeholder='Password'
            type='text'
            onChange={(event) => {
              setUser({ ...user, firstName: event.target.value });
            }} 
          />
        </div>
        <div className='field'>
          <div className='control'>
            <button 
              onClick={signUp}
              className='button is-success'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
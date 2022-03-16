import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const login = () => {

  }
  return (
    <div className='container'>
      <div style={{ fontSize: 20 }}>Login</div>

      {/* Username */}
      <div className="field">
        <label className='label'>Username</label>
        <div className='control'>
          <input 
            className="input"
            placeholder='Username'
            type='text'
            onChange={(event) => {
              setUsername(event.target.value);
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
              setPassword(event.target.value);
            }} 
          />
        </div>
        <div className='field'>
          <div className='control'>
            <button 
              onClick={login}
              className='button is-success'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
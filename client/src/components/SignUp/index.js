import React, { useState } from 'react';
import Axios from 'axios';
import Cookies from "universal-cookie"

const SignUp = ({setIsAuth}) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

  const signUp = () => {
    Axios.post("/signup", user).then(res => {
      const { token, userId, firstName, lastName, username, hashedPassword } = res.data;
      cookies.set("token", token);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true)
    });
  };

  return (
    <div>
      <div style={{ fontSize: '2em' }}>Sign Up</div>
      
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
              setUser({ ...user, lastName: event.target.value });
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
              setUser({ ...user, username: event.target.value });
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
              setUser({ ...user, password: event.target.value });
            }} 
          />
        </div>
      </div>
      <div className='field'>
          <div className='control'>
            <button 
              onClick={signUp}
              className='button is-success'
            >
              Sign Up
            </button>
          </div>
        </div>
    </div>
  )
}

export default SignUp;
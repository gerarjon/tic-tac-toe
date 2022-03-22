import React, { useState } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';

const Login = ({setIsAuth}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  const login = () => {
    Axios.post("tic-tac-toe/login", {
      username,
      password,
    }).then(res => {
      const { token, userId, firstName, lastName, username } = res.data;
      cookies.set("token", token);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("userId", userId);
      cookies.set("username", username);
      setIsAuth(true);
    });
  }
  return (
    <div>
      <div style={{ fontSize: '2em' }}>Login</div>

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
  )
};

export default Login;
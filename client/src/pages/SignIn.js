import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import tictactoe from '../tictactoe.png'
import './style.css';

const SignIn = ({setIsAuth}) => {
  const [isLogPage, setIsLogPage] = useState(true)

  return(
    <div className='container'>
      <div className='columns login-container'>
        <div className='column is-hidden-mobile'>
          <img className="tictactoe-img" src={tictactoe} alt="tictactoe" />
        </div>
        <div className='column'>
          <div className='login-side'>
            { (isLogPage) ?
              <>
                <Login setIsAuth={setIsAuth} /> 
                <p>Don't have an account? Sign up <span className="login-click" onClick={() => setIsLogPage(!isLogPage)}>here</span>.</p>
              </>  
              : 
              <>
                <SignUp setIsAuth={setIsAuth} /> 
                <p>Have an account? Login <span className="login-click" onClick={() => setIsLogPage(!isLogPage)}>here</span>.</p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
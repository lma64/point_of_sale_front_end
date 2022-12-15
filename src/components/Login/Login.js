import React, { useState } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import eye from '../../assets/iconeye.png';

function Login() {
  const [isHide, setHidePassword] = useState(true)
  const showPassword = () => {
    if (isHide) {
      setHidePassword(false)
    }
    else {
      setHidePassword(true)
    }
  }
  return (
    <div className="cont">
      <form>
        <h1>LOG IN</h1>
        <br></br>
        <div className="input-container">
          <label>Email </label> <br></br>
          <input className="inp" type="email" name="uname" required />
        </div>
        <br></br>
        <div className="input-container">
          <label>Password </label> <br></br>
          {isHide ? <input className="inp inp2" type="password" name="pass" required /> : <input className="inp inp2" type="text" name="pass" required />}
          <img class='eye-icon pointer' src={eye} onClick={showPassword}/>
        </div>
        <br></br>
        <div className="button-container">
          <Link to = "/inventory"><button type="button" class="btn btn-primary btn-me">Login</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
// import './design.css'

const styles = {
  width:"400px",
  height:"300px",
  borderRadius:'50%'
}

const Login = () => {
  return (

    <div >
      <div className='login'>
       
      <input placeholder="Username"/>
      <br/>
      <input placeholder="Password" type="password"/>
      <br/>
      <input placeholder="submit" type="submit"/>
    <br/>
      <button> Forgot Password? </button>
      <br/>
      <button> Click here to Register! </button>
      <br/>
 <img src="https://cdn.dribbble.com/users/689802/screenshots/2611329/dog_running.gif" style={styles} />
      </div>
    </div>
  )
}

export default Login;
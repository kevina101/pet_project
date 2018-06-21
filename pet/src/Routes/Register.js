import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

const Register =()=> {
    return(
        <div>
            <h1>Welcome to LoneWolf, Register today to find your dog! </h1>

            <div className="Register">
            <input placeholder="First Name"/> 
            <br/>
            {" "}
            <input placeholder="Last Name"/> 
            {" "}
            <br/>
            <input placeholder="Address"/> 
            {" "}
            <br/>
            <input placeholder="City"/> 
            {" "}
            <br/>
            <input placeholder="Zipcode"/> 
            {" "}
            <br/>
            <input placeholder="Are you a petowner?"/> 
            <br/>

            <button type="submit" placeholder="Submit Registration"> Submit Registration </button>

            
    </div>
            </div>
    )
}



export default Register;
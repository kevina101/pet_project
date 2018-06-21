import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Adopt from './Routes/Adopt';
import Home from './Routes/Home';
import Register from './Routes/Register';
import Login from './Routes/Login';
import './design.css';
const change;




require('dotenv').config()


class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar">
           <h1 className="title" > LoneWolf </h1>
        </nav>
      
      <div className="Routes">
        <Link to="/register">
            Register
          </Link>
          {" "}
            
          <Link to="/login">Login
           </Link>
        {" "}
          
          <Link to="/">Home
           </Link>
          {" "}
            
          <Link to="/adopt">
            Adopting
            </Link>
         </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path="/adopt" component={Adopt}/>
          {/* <Route path='/profile' component={UserProfile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;

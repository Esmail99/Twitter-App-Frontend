import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Signin from './components/Signin';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
// import Footer from './components/Footer';

const initialState = {
    route: 'profile',
    isSignedin: false,
    userInfo: {
      "following": false,
      "_id": "5e844e7146ff4f3920940b8f",
      "username": "Esmail",
      "email": "esmail@gmail.com",
      "password": "123",
      "__v": 0
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  changeRoute = (route) => {
    if(route==='signout')
      this.setState(initialState)
    this.setState({ route: route });
    if(route === 'homeSignedin')
      this.setState({isSignedin: true});
  }

  loadUser = (data) => {
    this.setState({userInfo: data})
  }

  render(){
    return (
      <div>
        <Navigation 
          changeRoute={this.changeRoute}
          isSignedin={this.state.isSignedin}
          userInfo={this.state.userInfo} 
        />
        {
          (this.state.route === 'homeDefault' || this.state.route === 'homeSignedin')
          ? <Home 
              changeRoute={this.changeRoute}
              userInfo={this.state.userInfo}
              isSignedin={this.state.isSignedin}
            />
          : this.state.route === 'profile'
          ? <Profile userInfo={this.state.userInfo} />
          : this.state.route === 'register'
          ? <Register
              changeRoute={this.changeRoute}
            />
          : <Signin
              changeRoute={this.changeRoute}
              loadUser={this.loadUser}
            />
        }
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
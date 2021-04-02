import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = 'Your client id from Google Cloud Console';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      givenName: '',
      email: '',
      image: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        givenName: response.profileObj.givenName,
        email: response.profileObj.email,
        image: response.profileObj.imageUrl
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      givenName: '',
      email: '',
      image: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          //buttonText='Login'
          onSuccess={ this.login}
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        
        />
      }
      <br/><br/>
      <img src = {this.state.image}></img>
      { this.state.givenName ? <h6>Your Name: <br/><br/> { this.state.givenName }</h6> : null }
      {this.state.email ? <h6>Your email: <br/><br/> { this.state.email }</h6> : null }
      
      
      


    </div>
    )
  }
}

export default GoogleBtn;

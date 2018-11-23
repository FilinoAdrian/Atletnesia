import React, { Component } from 'react';
import firebase from '../../../config/firebaseConfig';

import './AuthForm.css';

class Login extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then((response) => {
      this.props.toggleAuthForm();
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {

    return(
      <div className="inner-container">
        <div className="input-group">
          <input type="email" name="email" className="login-input" placeholder="Email" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.handleChange} />
        </div>
        <button type="button" className="login-btn" onClick={this.handleSubmit} >Masuk</button>
        <div className="change-auth-type" onClick={this.props.toggleRegisterForm}>Belum punya akun?</div>
      </div>
    )
  }
}

export default Login
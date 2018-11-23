import React, { Component } from 'react';
import firebase from '../../../config/firebaseConfig';

import './AuthForm.css';

class Register extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(
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
          <input type="text" name="firstname" className="login-input" placeholder="First Name" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <input type="text" name="lastname" className="login-input" placeholder="Last Name" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <input type="email" name="email" className="login-input" placeholder="Email" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.handleChange} />
        </div>
        <button type="button" className="login-btn" onClick={this.handleSubmit}>Daftar</button>
        <div className="change-auth-type" onClick={this.props.toggleLoginForm}>Sudah punya akun?</div>
      </div>
    )
  }
}

export default Register
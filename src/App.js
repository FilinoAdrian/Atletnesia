import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import AuthForm from './components/header/auth/AuthForm';
import ListProgram from './components/list_program/ListProgram';
import DetailProgram from './components/detail/DetailProgram';
import AthleteProfile from './components/profile/athleteProfile/AthleteProfile';
import FormProgram from './components/form_program/FormProgram';

import firebase from './config/firebaseConfig';


class App extends Component {

  constructor(props) {
    super(props);

    this.toggleLoginForm = this.toggleLoginForm.bind(this);
    this.toggleRegisterForm = this.toggleRegisterForm.bind(this);

    this.state = {
      authenticated: false,
      authFormOpen: false,
      isLoginOpen: false,
      isRegisterOpen: false,
    }
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        })
      } else {
        this.setState({
          authenticated: false
        })
      }
    })
  }

  toggleAuthForm = () => {
    this.setState({
      authFormOpen: !this.state.authFormOpen
    })
  }

  toggleLoginForm = (e) => {
    e.preventDefault();
    if (!this.state.authFormOpen){
      this.toggleAuthForm();
    }
    
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    });
  }

  toggleRegisterForm = (e) => {
    e.preventDefault();
    if (!this.state.authFormOpen){
      this.toggleAuthForm();
    }

    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          <AuthForm 
            isAuthFormOpen={this.state.authFormOpen} 
            isRegisterOpen={this.state.isRegisterOpen}
            isLoginOpen={this.state.isLoginOpen}
            toggleAuthForm={this.toggleAuthForm} 
            toggleLoginForm={this.toggleLoginForm}
            toggleRegisterForm={this.toggleRegisterForm}/>

          <Header 
            authenticated={this.state.authenticated}
            toggleLoginForm={this.toggleLoginForm}
            toggleRegisterForm={this.toggleRegisterForm} />

          <Route exact path="/"
            render={() => <Homepage 
              authenticated={this.state.authenticated}
              toggleRegisterForm={this.toggleRegisterForm}
              toggleLoginForm={this.toggleLoginForm} />} 
          />
          
          <Route exact path="/beasiswa" component={ListProgram} />
          <Route exact path="/beasiswa/:id" component={DetailProgram} />
          <Route exact path="/formprogram" component={FormProgram} />
          <Route exact path="/dashboard" component={AthleteProfile} />

          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import Login from './Login';
import Register from './Register';
import { Modal } from 'reactstrap';

import './AuthForm.css';

const AuthForm = (props) => {

  const { isAuthFormOpen, isRegisterOpen, isLoginOpen, toggleAuthForm, toggleLoginForm, toggleRegisterForm } = props;

  return(
    <div>
      <Modal isOpen={isAuthFormOpen} toggle={toggleAuthForm}>
        <div className="box-controller">
          <div className={"controller " + (isRegisterOpen ? "selected-controller" : "")} 
            onClick={toggleRegisterForm}>
            Daftar
          </div>
          <div className={"controller " + (isLoginOpen ? "selected-controller" : "")}
            onClick={toggleLoginForm}>
            Masuk
          </div>
        </div>
        <div className="box-container">
          {isRegisterOpen && <Register toggleLoginForm={toggleLoginForm} toggleAuthForm={toggleAuthForm} />}
          {isLoginOpen && <Login toggleRegisterForm={toggleRegisterForm} toggleAuthForm={toggleAuthForm} />}
        </div>
      </Modal>
    </div>
  )
}

export default AuthForm
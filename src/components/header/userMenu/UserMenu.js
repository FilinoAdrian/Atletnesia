import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../../config/firebaseConfig';

class UserMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }

  logout = (e) => {
    e.preventDefault();
    firebase.auth().signOut().then((user, error) => {
      this.setState({ redirect: true })
    })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to ="/" />
    }

    return(
      <Nav className="ml-auto" navbar>
        <Link to="/dashboard"><button className="header-btn">Dashboard</button></Link>
        <button className="header-btn" onClick={this.logout}>Keluar</button>
      </Nav>
    )
  }
}

export default UserMenu
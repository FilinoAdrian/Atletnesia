import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserMenu from './userMenu/UserMenu';

import './Header.css';

class Header extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar color="transparent" light expand="md">
          <Container>
            <NavbarBrand href="/">ATLETNESIA</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.authenticated
            ? (
              <UserMenu />
            ) 
            : (
              <Nav className="ml-auto" navbar>
                <Link to="/beasiswa"><button className="header-btn">Beasiswa</button></Link>
                <button className="header-btn" onClick={this.props.toggleLoginForm}>Masuk</button>
              </Nav>
            )} 
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
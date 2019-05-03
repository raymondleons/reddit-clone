import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Images
import Logo from '../assets/img/logo.png'
import help from '../assets/img/help_icon.png'

import {
    Navbar,
    Nav,
    NavItem,
    Container
  } from 'reactstrap';
  


class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <Container>
            <Link className="navbar-brand" to="/">
            <img src={Logo} style={{height:"35px"}} alt=""/></Link>

            <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link className="nav-link" to="/help">Help<img src={help} alt={help} style={{height:"15px", paddingLeft:"5px"}}/></Link>
                    </NavItem>
                  </Nav>

            </Container>
        </Navbar>
      </div>
    )
  }
}


export default NavBar;

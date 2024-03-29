import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <Navbar dark sticky="top" expand="md" >                   
                        <NavbarBrand href="/"><img src="../img/renaissance.jpg" alt="Rmm Logo" className="mr-auto"/>                      
                        </NavbarBrand>
                            <div>
                                <h1>RENAISSANCE MAN MUSIC</h1>                 
                                <h3>The Soundtrack For Your Vision</h3>
                            </div>    
                          
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            
                                <Nav className="ml-auto"> 
                                    <NavItem>
                                        <NavLink href="/">HOME
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/services">SERVICES
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/media">MEDIA
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/about">ABOUT
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/contact">CONTACT
                                        </NavLink>
                                    </NavItem>                    
                                </Nav>
                            
                        </Collapse>
                    </Navbar>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Header;
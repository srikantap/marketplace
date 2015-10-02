var React = require('react');
var CartButton = require('./app-cartbutton.js');
var ReactBootstrap = require('react-bootstrap');

var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavDropdown = ReactBootstrap.NavDropdown;
var NavItem = ReactBootstrap.NavItem;
var CollapsibleNav = ReactBootstrap.CollapsibleNav;

var Header = React.createClass({
    render: function () {
        return (
            <Navbar brand="Marketplace" toggleNavKey={0}>
                <CollapsibleNav eventKey={0}> 
                    <Nav navbar right>
                        <CartButton />
                    </Nav>
                </CollapsibleNav>
            </Navbar>

        );
    }
});


module.exports = Header;

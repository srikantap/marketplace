var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavDropdown = ReactBootstrap.NavDropdown;
var NavItem = ReactBootstrap.NavItem;
var CollapsibleNav = ReactBootstrap.CollapsibleNav;

var AppStore = require('../../stores/app-store.js');
var CartButton = require('./app-cartbutton.js');
var WishlistButton = require('./app-wishlistbutton.js');

var Header = React.createClass({
    getInitialState:function() {
        return ({cartNum: AppStore.getCartSize(),
            wishlistNum: AppStore.getWishlistSize()});
    },

    componentWillMount:function() {
        AppStore.addChangeListener(this._onChange)
    },

    componentWillUnmount:function() {
        AppStore.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.setState({cartNum: AppStore.getCartSize(),
            wishlistNum: AppStore.getWishlistSize()});
    },

    render: function () {
        return (
            <Navbar brand="Marketplace" toggleNavKey={0}>
                <CollapsibleNav eventKey={0}> 
                    <Nav navbar right>
                        <CartButton numItems={this.state.cartNum}/>
                        &nbsp; &nbsp;
                        <WishlistButton numItems={this.state.wishlistNum}/>
                    </Nav>
                </CollapsibleNav>
            </Navbar>

        );
    }
});


module.exports = Header;

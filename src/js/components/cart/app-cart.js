var React = require('react');
var Link = require('react-router-component').Link
var Table = require('react-bootstrap').Table;

var AppStore = require('../../stores/app-store.js');
var RemoveFromCart = require('./app-removefromcart.js');
var RemoveFromWishlist = require('./app-removefromwishlist.js');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Cart = React.createClass({
    getInitialState:function() {
        return ({cartItems: AppStore.getCart(),
            wishlistItems: AppStore.getWishlist()});
    },

    componentWillMount:function() {
        AppStore.addChangeListener(this._onChange)
    },

    componentWillUnmount:function() {
        AppStore.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.setState({cartItems: AppStore.getCart(),
            wishlistItems: AppStore.getWishlist()});
    },

    render:function() {
        var total = 0;
        var items = this.state.cartItems.map(function(item, i) {
            var subtotal = item.price * item.qty;
            total += subtotal;
            return (
                <tr key={i}>
                <td><RemoveFromCart index={i} /></td>
                <td>{item.title}</td>
                <td>{item.qty}</td>
                <td>${subtotal}</td>
                </tr>
            );
        });

        var wishlisttotal = 0;
        var wishlistitems = this.state.wishlistItems.map(function(item, i) {
            return (
                <tr key={i}>
                <td><RemoveFromWishlist index={i} /></td>
                <td>{item.title}</td>
                </tr>
            );
        });

        return (
            <Grid>
                <Table responsive striped bordered condensed hover>
                   <thead>
                        <tr>
                        <th>Remove</th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items}
                    </tbody>

                    <tfoot>
                        <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                        </tr>
                    </tfoot>
                </Table>

                <Table responsive striped bordered condensed hover>
                   <thead>
                        <tr>
                        <th>Remove</th>
                        <th>Item</th>
                        </tr>
                    </thead>

                    <tbody>
                        {wishlistitems}
                    </tbody>

                </Table>

                <Link href="/">Go to Apps Market</Link>
            </Grid>
        );
    }
});

module.exports = Cart

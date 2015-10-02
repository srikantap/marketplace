var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store.js');
//var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

var Button = require('react-bootstrap').Button;

var CartButton = React.createClass({

    render: function() {
        return (
            <div>
                <Link href="/cart" className="btn btn-success"> Cart </Link> &nbsp;
                <Link href="/cart" className="btn btn-success"> Wishlist </Link>
            </div>
        );
    }
});

/*
    getInitialState:function() {
        return AppStore.getCartTotals();
    },

    componentWillMount:function() {
        AppStore.addChangeListener(this._onChange)
    },

    componentWillUnmount:function() {
        AppStore.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.setState({AppStore.getCartTotals());
    },
*/
module.exports = CartButton;

var React = require('react');
var Link = require('react-router-component').Link;

var AppStore = require('../../stores/app-store.js');

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

module.exports = CartButton;

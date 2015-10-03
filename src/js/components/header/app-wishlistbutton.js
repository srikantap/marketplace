var React = require('react');
var Link = require('react-router-component').Link;

var AppStore = require('../../stores/app-store.js');

var WishlistButton = React.createClass({

    render: function() {
        //console.log("WIshlist render: size of list: ", this.props.numItems);
        return (
            <Link href="/cart" className="btn btn-success"> Wishlist [{this.props.numItems}]</Link>
        );
    }
});

module.exports = WishlistButton;

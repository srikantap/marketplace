var React = require('react');
var AppActions = require('../../actions/app-actions');

var AddToWishlist = React.createClass({
    handler: function() {
        AppActions.addToWishlist(this.props.item)
    },

    render:function() {
        return <img src="./assets/images/btn-wishlist.png" onClick={this.handler}></img>;
    }
});

module.exports = AddToWishlist;

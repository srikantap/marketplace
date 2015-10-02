var React = require('react');
var AppActions = require('../../actions/app-actions');

var RemoveFromWishlist = React.createClass({
    handler: function(){
        AppActions.removeFromWishlist(this.props.index)
    },
    render:function(){
        return <button onClick={this.handler}>x</button>
    }
});

module.exports = RemoveFromWishlist;

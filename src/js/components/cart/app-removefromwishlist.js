var React = require('react');
var AppActions = require('../../actions/app-actions');

var RemoveFromWishlist = React.createClass({
    handler: function(){
        console.log("Removing: ", this.props.index);
        AppActions.removeFromWishlist(this.props.index)
    },
    render:function(){
        return <button onClick={this.handler}>x</button>
    }
});

module.exports = RemoveFromWishlist;

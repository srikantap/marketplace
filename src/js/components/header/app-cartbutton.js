var React = require('react');
var Link = require('react-router-component').Link;

var AppStore = require('../../stores/app-store.js');

var CartButton = React.createClass({

    render: function() {
        console.log("Cartbutton render: size of list: ", this.props.numItems);
        return (
            <Link href="/cart" className="btn btn-success"> Cart [{this.props.numItems}]</Link>
        );
    }
});

module.exports = CartButton;

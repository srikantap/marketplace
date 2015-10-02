var React = require('react');
var Link = require('react-router-component').Link;
//var AppStore = require('../../stores/app-store.js');
//var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

var Button = require('react-bootstrap').Button;
var CartButton = React.createClass({
  render: function() {
      return (
          <div>
              <Link href="/cart" className="btn btn-success"> Cart Items: </Link>
          </div>
      );
  }
});

module.exports = CartButton;

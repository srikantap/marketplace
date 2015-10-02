var React = require('react');
var Link = require('react-router-component').Link;
var AddToCart = require('./app-addtocart');
var AddToWishlist = require('./app-addtowishlist');

var Button = require('react-bootstrap').Button;
var Thumbnail = require('react-bootstrap').Thumbnail;

var CatalogItem = React.createClass({
    render:function() {

        var price = ((this.props.item.price > 0) ? ("$ " + this.props.item.price) : "Free");

        return (
            <Thumbnail src={this.props.item.thumbnailUrl}>
                <center> <p>
                    <h5><em>{this.props.item.title}</em></h5>

                    <Button bsStyle="primary"> {price} </Button> &nbsp;
                    <AddToCart item={this.props.item} /> &nbsp;
                    <AddToWishlist item={this.props.item} /> &nbsp;

                </p> </center>
            </Thumbnail>
        )
    }
});

module.exports = CatalogItem;

var React = require('react');
var Link = require('react-router-component').Link;
var AddToCart = require('./app-addtocart');

var Button = require('react-bootstrap').Button;
var Thumbnail = require('react-bootstrap').Thumbnail;

var CatalogItem = React.createClass({
    render:function() {

        var itemStyle = {
            borderBottom:'1px solid #ccc',
            paddingBottom:5
        };
        var price = ((this.props.item.price > 0) ? this.props.item.price : "Free");

        return (
            <Thumbnail src={this.props.item.thumbnailUrl}>
                <center> <p>
                    <h4>{this.props.item.title}</h4>

                    <div className="btn-group">

                        <Button bsStyle="primary">{price}</Button> &nbsp;
                        <Link href={'/item/' + this.props.item.id} className="btn btn-default">Learn More</Link>
                        <br/>
                        &nbsp;
                        <AddToCart item={this.props.item} /> &nbsp;
                        <img src="./assets/images/btn-wishlist.png"></img> &nbsp;
                    </div>

                </p> </center>
            </Thumbnail>
        )
    }
});

module.exports = CatalogItem;

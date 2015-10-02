var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location  = Router.Location;

var Header = require('./header/app-header.js');
var ProductCarousel = require('./product_carousel/app-productcarousel.js');
var Catalog = require('./catalog/app-catalog.js');
var Cart = require('./cart/app-cart.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            stillLoading: true,
            serverData: []
        };
    },

    getServerData: function() {
        return (stillLoading ? null : serverData);
    },

    componentDidMount: function() {

        $.get(this.props.source, function(results) {
            var data = results.apps;
            this.state.serverData = data;
            //console.log(data);

            if (this.isMounted()) {
                this.setState({stillLoading: false });
            }
        }.bind(this));
    },

    render: function() {
        if (this.state.stillLoading) return null;

        return (
            <div>
                <Header />
                <ProductCarousel data={this.state.serverData} carouselNum={3}/>
                <hr /> &nbsp;
                <Locations>
                    <Location path="/" handler={Catalog} data={this.state.serverData} />
                    <Location path="/cart" handler={Cart} />
                </Locations>
            </div>
        );
    }
});


module.exports = App;

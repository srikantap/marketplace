var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('./app-addtocart.js')
//var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var CatalogItem = require('../catalog/app-catalogitem');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Catalog = React.createClass ({

    getInitialState:function() {
        return ({items: AppStore.getCatalog(this.props.data)})
    },

    componentWillMount:function() {
        AppStore.addChangeListener(this._onChange)
    },

    componentWillUnmount:function() {
        AppStore.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.setState({items: AppStore.getCatalog(this.props.data)});
    },

    createThumbnails: function(rawData) {
        var formattedData = rawData.map(function (thumb) {
            return (
                <Col xs={8} md={3}>
                    <CatalogItem url={thumb.id} item={thumb} />
                </Col>
            );
        });

        return(formattedData);
    },

    render:function() {
        //console.log("Catalog.render: ", this.props.data);
        return (
            <Grid>
                <Row>
                    {this.createThumbnails(this.props.data)}
                </Row>
            </Grid>
        );
    }
});

module.exports = Catalog;

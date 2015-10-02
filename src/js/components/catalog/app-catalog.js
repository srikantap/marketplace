var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('./app-addtocart.js')
//var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var CatalogItem = require('../catalog/app-catalogitem');

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

    render:function() {
        //console.log("Catalog.render: ", this.props.data);
        var items = this.state.items.map(function(item) {
            return <CatalogItem url={item.id} item={item} />

        })
        return (
            <div className="row">
            {items}
            </div>
        )
    }
});

module.exports = Catalog

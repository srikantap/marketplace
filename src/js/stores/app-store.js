var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var App = require('../components/app.js');

var CHANGE_EVENT = 'change';

var _catalog = [];
var _cartItems = [];
var _wishlistItems = [];

function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

function _addItem(item) {
    if(!item.inCart) {
        item['inCart'] = true;
        _cartItems.push(item);
    }
    else {
        console.log("Item already in cart: ", item.id);
    }
}

function _addToWishlist(item) {
    if(!item.inWishlist) {
        item['inWishlist'] = true;
        _wishlistItems.push(item);
    }
    else {
        console.log("Item already in cart: ", item.id);
    }
}

function _removeFromWishlist(index) {
    _wishlistItems[index].inWishlist = false;
    _wishlistItems.splice(index, 1);
}

var AppStore = assign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    getCart: function() {
        return _cartItems;
    },

    getWishlist: function() {
        return _wishlistItems;
    },

    getCatalog: function(data) {
        _catalog = data;
        return _catalog;
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action; // this is our action from handleViewAction
        switch(action.actionType){
            case AppConstants.ADD_ITEM:
                _addItem(payload.action.item);
                break;

            case AppConstants.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;

            case AppConstants.ADD_WISHLIST:
                _addToWishlist(payload.action.item);
                break;

            case AppConstants.REMOVE_WISHLIST:
                _removeFromWishlist(payload.action.index);
                break;
        }

        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;

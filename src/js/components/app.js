var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location  = Router.Location;

var Template = require('./app-template.js');


var App = React.createClass({
    getInitialState: function() {
        return {
            stillLoading: true,
            serverData: []
        };
    },

    componentDidMount: function() {
        console.log("Source: ", this.props.source);

        $.get(this.props.source, function(results) {
            var data = results.apps;
            this.state.serverData = data;
            console.log(data);

            if (this.isMounted()) {
                this.setState({stillLoading: false });
            }
        }.bind(this));
    },

    render: function() {
        if (this.state.stillLoading) 
        {
            console.log("Not yet ready...");
            return null;
        }

        return (
            <div className="panel-body">
                <Template>
                </Template>
            </div>
        );
    }
});

module.exports = App;

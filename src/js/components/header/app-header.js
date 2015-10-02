var React = require('react');

var Header = React.createClass({
  render:function(){
      console.log("Header.render");
    return (
        <div className="row">
          <div className="col-sm-6"><h1>Lets Shop</h1></div>
          <div className="col-sm-2 col-sm-push-3">
            <br />
          </div>
       </div>
    );
  }
});

module.exports = Header;

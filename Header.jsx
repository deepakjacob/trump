'use strict';


var HeaderLogo = require( './HeaderLogo.jsx' );

require("./stylesheets/modules/header")

module.exports = React.createClass( {
  displayName: 'Header',
  render: function () {
    return (
    <div>
      <HeaderLogo />
      <div id="header" className="header">
        <a>This is a header</a>
      </div>
    </div>
    );
  }
} );

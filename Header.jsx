'use strict';

var HeaderLogo = require( './HeaderLogo.jsx' );

module.exports = React.createClass( {
  displayName: 'Header',
  render: function () {
    return (
    <div>
      <HeaderLogo />
      <div id="header">
        <a>This is a header</a>
      </div>
    </div>
    );
  }
} );

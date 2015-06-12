'use strict';

var React = require( 'react' );
var Header = require( './Header.jsx' );
var Board = require( './Board.jsx' );

module.exports = React.createClass( {
  displayName: 'Trump',

  render: function () {
    return (
    <div>
      <Header />
      <Board />
      <Header /> This is the main file
    </div>
    );
  }
} );

'use strict';

var List = require( './List.jsx' );

module.exports = React.createClass( {
  displayName: 'Board',

  getInitialState: function () {
    return {
      message: 'This is the board'
    };
  },

  render: function () {
    return (
    <div>
      {this.state.message}
      <List />
      <List />
      <List />
    </div>
    );
  }
} );

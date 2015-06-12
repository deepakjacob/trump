'use strict';

var React = require( 'react' );
var Item = require( './Item.jsx' );
var CardComposerComposite = require( './CardComposerComposite' );

module.exports = React.createClass( {
  displayName: 'List',
  render: function () {
    return (
    <div>
      <Item />
      <Item />
      <Item />
      <CardComposerComposite />
    </div>
    );
  }
} );

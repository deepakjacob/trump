'use strict';


var React = require( 'react' );
var CardComposerLink = require( './CardComposerLink.jsx' );
var CardComposer = require( './CardComposer.jsx' );

module.exports = React.createClass( {
  displayName: 'CardComposerComposite',

  getInitialState: function () {
    return {
      isCreate: false
    };
  },

  handleClick: function ( e ) {
    e.preventDefault();
    this.setState( {
      isCreate: true
    } );
    console.log( e );
  },

  render: function () {
    if ( !this.state.isCreate ) {
      var boundClick = this.handleClick;

      return (
      <CardComposerLink onClick={boundClick}/>
      );
    }
    return (
    <CardComposer />
    );
  }
} );

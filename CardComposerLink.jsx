var React = require( 'react' );

module.exports = React.createClass( {
  displayName: 'CardComposerLink',
  render: function () {
    return (
    <div>
      <a href="#" onClick={this.props.onClick}>Add a card</a>
    </div>
    );
  }
} );

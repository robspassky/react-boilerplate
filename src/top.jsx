/** @jsx React.DOM */

var React = require('react'),
    Nav   = require('./nav.jsx'),
    Footer  = require('./footer.jsx')
;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header className="page-header">
          <h1>TopPage</h1>
        </header>
        <Nav />
        <article>
          <p>Please select artist or country</p>
        </article>
        <Footer />
      </div>
    );
  }
});

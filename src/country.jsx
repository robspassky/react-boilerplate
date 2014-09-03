/** @jsx React.DOM */

var React = require('react'),
    Nav   = require('./nav.jsx')
    Footer  = require('./footer.jsx')
;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header className="page-header">
          <h1>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav />
        <article className="main-content">
          <div>select-country</div>
          <div>tracks</div>
        </article>
        <Footer />
      </div>
    );
  }
});
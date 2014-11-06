if (typeof window !== "undefined") {
  require('insert-css')(require('./Nav.styl'));
}

var React = require('react');
var Link = require('react-router-component').Link;

module.exports = React.createClass({
  propTypes: {
    current: React.PropTypes.string
  },
  render() {
    var artistClassName = React.addons.classSet({
      active: this.props.current === "artist"
    });
    var countryClassName = React.addons.classSet({
      active: this.props.current === "country"
    });
    return (
      <div className="nav-content">
        <ul className="nav nav-pills nav-justified">
          <li className={artistClassName}><Link href="/artist">Artist</Link></li>
          <li className={countryClassName}><Link href="/country">Country</Link></li>
        </ul>
      </div>
    );
  }
});

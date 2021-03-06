'use strict';

import React  from 'react';
import Nav    from './Nav';
import Footer from './Footer';

export default React.createClass({
  displayName: 'Top',
  render() {
    let style = {
      title: {
        fontFamily: "'Playfair Display SC', serif"
      }
    };
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>TopPage</h1>
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

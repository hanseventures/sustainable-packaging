import '../styles/index.scss';

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';
import SubFooter from './SubFooter';

const Layout = props => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <div id="wrapper" className="wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
      <SubFooter />
    </div>
  </>
);

export default Layout;

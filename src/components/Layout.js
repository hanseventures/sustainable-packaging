import '../styles/index.scss';

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';
import SubFooter from './SubFooter';

const Layout = props => (
  <>
    <SEO />
    <Header />
    <main className={`page${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
      <div id="wrapper" className="wrapper container">
        {props.bodyClass === "onboarding" ? (
          props.children
        ) : (
          <>

            {props.children}
          </>
        )}
      </div>
    </main>
    <Footer />
  </>
)

export default Layout

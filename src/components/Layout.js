import "../styles/index.scss"

import React from "react"

import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"
import SubFooter from "./SubFooter"

const Layout = props => (
  <>
    <SEO />
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ""}`}>
      <div id="Wrapper" className="Wrapper">
        {props.bodyClass === "onboarding" ? (
          props.children
        ) : (
          <>
            <Header />
            {props.children}
            <Footer />
            <SubFooter />
          </>
        )}
      </div>
    </div>
  </>
)

export default Layout

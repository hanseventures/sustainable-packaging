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
      <div id="Wrapper" className="wrapper container">
        {props.bodyClass === "onboarding" ? (
          props.children
        ) : (
          <>

            {props.children}
            <Footer />
          </>
        )}
      </div>
    </div>
  </>
)

export default Layout

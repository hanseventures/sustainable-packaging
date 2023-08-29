import { graphql, Link, navigate, StaticQuery } from 'gatsby'
import React from 'react'

const HeroStaticCentered = props => {
  return (
    <section className="l-hero-static container bg-wht">

      <div className="hero-image">

        <div className="content-wrapper">

          <div className="content">

            <div className="intro text-xs-center">
              <h1 className="mb-2 mt-0" title="">Nachhaltige Verpackungen nach Ihren Wünschen!</h1>
              <p className="font-lg font-weight-extralight mb-4" title="">Wir helfen Ihnen, die ideale nachhaltige Verpackungslösung für Ihr Unternehmen zu finden.</p>

              <div className="d-flex flex-column flex-md-row justify-content-center">
                <button
                  className='btn btn-primary mb-2 mr-md-2'
                  onClick={()=> navigate('/configurator')}
                >
                  Zur Wunschverpackung
                </button>
                <a
                  href='tel:+4940303886619'
                  className='btn btn-hero mb-2'
                >
                  Rückruf anfordern
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
export default HeroStaticCentered

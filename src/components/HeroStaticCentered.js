import { graphql, Link, navigate, StaticQuery } from 'gatsby';
import React from "react"

const HeroStaticCentered = props => {
  return (
    <section className="l-hero-static container bg-wht">

      <div className="hero-image">

        <div className="content-wrapper">

          <div className="content">

            <div className="intro text-xs-center">
              <h1 className="mb-2 mt-0" title="">Nachhaltige Verpackungen nach Ihren Wünschen!</h1>
              <p className="font-lg font-weight-extralight mb-4" title="">Wir bieten recycle- und kompostierbare Verpackungslösungen, individuell abgestimmt nach Kundenwunsch.</p>

              <div className="d-flex flex-column flex-md-row column-gap-2 row-gap-2 justify-content-center">
                <a
                  href='#'
                  className='btn btn-primary'
                  onClick={()=> navigate('/configurator')}
                >
                  Traumverpackung finden
                </a>
                <a
                  href='tel:+4940303886612'
                  className='btn btn-hero'
                >
                  Rufen Sie uns an
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

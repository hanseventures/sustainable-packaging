import React from "react"

const HeroStaticCentered = props => {
  return (
    <section className="l-hero-static container bg-wht">

      <div className="hero-image">

        <div className="content-wrapper">

          <div className="content">

            <div className="intro text-xs-center">
              <h1 className="mb-2 mt-0" title="">Die passende nachhaltige Verpackung für Sie!</h1>
              <p className="font-lg font-weight-extralight mb-4" title="">Umweltfreundliche Verpackungslösungen ohne Plastik.</p>

              <div className="d-flex flex-column flex-md-row column-gap-2 row-gap-2 justify-content-center">
                <a
                  href="#"
                  className="btn btn-primary"
                  title="title"
                >
                  Konfigurator starten
                </a>
                <a
                  href="#"
                  className="btn btn-secondary d-none"
                  title="title"
                >
                  Secondary Button
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

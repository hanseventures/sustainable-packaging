import React from "react"

const HeroStatic = props => {
  return (
    <section className="hero container bg-wht">

      <div className="hero-image">

        <div className="content-wrapper">

          <div className="content">

            <div className="intro text-xs-center text-md-left">
              <h1 className="mb-4 mt-0" title="">Title</h1>
              <p className="subtitle font-weight-extralight mb-4" title="">Subtitle</p>

              <div className="d-flex flex-column flex-md-row column-gap-2 row-gap-2">
                <a
                  href="#"
                  className="btn btn-primary"
                  title="title"
                >
                  Primary Button
                </a>
                <a
                  href="#"
                  className="btn btn-secondary"
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
export default HeroStatic

import React from "react"

const HeroStatic = props => {
  return (
    <section class="hero container bg-wht">

      <div class="hero-image">

        <div class="content-wrapper">

          <div class="content">

            <div class="intro text-xs-center text-md-left">
              <h1 class="mb-4 mt-0" title="">Title</h1>
              <p class="subtitle font-weight-extralight mb-4" title="">Subtitle</p>

              <div class="d-flex flex-column flex-md-row column-gap-2 row-gap-2">
                <a
                  href="#"
                  class="btn btn-primary"
                  title="title"
                >
                  Primary Button
                </a>
                <a
                  href="#"
                  class="btn btn-secondary"
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

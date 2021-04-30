import React from "react"

const HeroStatic = props => {
  return (
    <section class="hero container bg-wht">

      <div class="hero-image">

        <div class="content-wrapper">

          <div class="content">

            <div class="intro text-xs-center text-sm-left">
              <h1 class="mb-4" title="">Title</h1>
              <p class="subtitle font-weight-extralight mb-4" title="">Subtitle</p>

              <div class="cta-wrapper">
                <a
                  href="#"
                  class="btn btn-primary wdth-80"
                  title="title"
                >
                  Primary Button
                </a>
                <a
                  href="#"
                  class="btn btn-primary wdth-80 mt-3 mt-sm-0 ml-sm-3"
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

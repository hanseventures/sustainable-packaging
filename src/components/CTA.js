import React from "react"

const CTA = props => {
  return (
    <section class="cta container bg-primary">

      <div class="content content-centered content-roomy trimmed-width-3 d-grid">

        <div class="text-xs-center">

          <h2 class="font-wht">CTA Section Title</h2>

          <div class="mb-4 font-md font-wht">
            Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </div>

          <a
            class="btn btn-secondary mt-2"
            href="#"
            title="Button Title"
          >
            Secondary Button
          </a>

        </div>

      </div>

    </section>
  )
}
export default CTA

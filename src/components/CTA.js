import React from "react"

const CTA = props => {
  return (
    <section className="l-cta container bg-primary">

      <div className="content content-centered content-roomy trimmed-3 d-grid">

        <div className="text-xs-center">

          <h2 className="font-wht">CTA Section Title</h2>

          <div className="mb-4 font-md font-wht">
            Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </div>

          <a
            className="btn btn-secondary mt-2"
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

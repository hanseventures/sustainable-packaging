import React from "react"

const TextWithImage = props => {
  return (
    <section class="text-image text-image--left container bg-wht">

      <div class="content content-centered content-roomy trimmed-width-3 d-grid column-gap-4 row-gap-3">

        <div class="group-description">
          <h3>Change CLASS to flip content</h3>
          <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.</p>
        </div>

        <div class="group-images">
          <img
            src="/images/illustrations/suburban-illustration-01b.svg"
            class="my-3"
            alt="Image Description"
          />
        </div>

      </div>

    </section>
  )
}
export default TextWithImage

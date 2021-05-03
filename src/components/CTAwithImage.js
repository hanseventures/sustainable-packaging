import React from "react"

const CTA = props => {
  return (
    <section id="intro" className='cta-with-image bg-primary d-flex flex-md-row-reverse font-wht mb-md-3 mx-md-3'>

      <div className='image-wrapper d-none d-md-block'>
        <img
          alt="Image Description"
          src='/images/suburban-coworking-cta.jpg'
        />
      </div>

      <div className='content content-wrapper'>
        <h2 className='mt-0 font-wht'>Unser Ziel</h2>
        <p>
          Wir wollen Co-Working Spaces dahin bringen, wo sie wirklich benötigt
          werden - und zwar in deine Nähe!
        </p>
        <p>
          <strong>Um dieses Ziel zu erreichen brauchen wir deine Hilfe.</strong>
        </p>
        <a href='#contact-form' className='btn btn-outline mt-3'>
          Direkt anmelden
        </a>
      </div>

    </section>
  )
}
export default CTA

import React from 'react';

const FAQv2 = props => {
  return (
    <section className="l-faq-v2 container" itemScope itemType="https://schema.org/FAQPage">

      <div className="content content--roomy">

        <div className='trimmed-2 text-xs-center'>
          <h3 className='mt-0'>
            <span className='highlight mb-2 d-none'>So geht's</span>
            FAQ's
          </h3>
          <span className='mb-2 d-none'>Häufig gestellte Fragen unserer Kunden.</span>
        </div>

        <div className="faq-wrapper trimmed-2 mt-5">

          <article className="is-open mb-4">
            <button type="button" className="faq--collapsible pos-relative text-xs-left p-3">
              <div className="plus-animated p-3">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
              <strong>Wie werden nachhaltige Verpackungen entsorgt?</strong>
            </button>
            <div className="faq--content animate__animated animate__fadeIn p-3">
              <p>Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </div>
          </article>

          <article className="mb-4">
            <button type="button" className="faq--collapsible pos-relative text-xs-left p-3">
              <div className="plus-animated is-active p-3">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
              <strong>Ist der Druck klimaneutral?</strong>
            </button>
            <div className="faq--content animate__animated animate__fadeIn p-3">
              <p>Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </div>
          </article>

          <article className="mb-4">
            <button type="button" className="faq--collapsible pos-relative text-xs-left p-3">
              <div className="plus-animated p-3">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
              <strong>Sind die Materialien aus nachhaltiger Herstellung?</strong>
            </button>
            <div className="faq--content animate__animated animate__fadeIn p-3">
              <p>Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </div>
          </article>

          <article className="mb-4">
            <button type="button" className="faq--collapsible pos-relative text-xs-left p-3">
              <div className="plus-animated p-3">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
              <strong>Wer prüft und zertifiziert die Verpackungen?</strong>
            </button>
            <div className="faq--content animate__animated animate__fadeIn p-3">
              <p>Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </div>
          </article>

        </div>

      </div>

    </section>
  )
}
export default FAQv2

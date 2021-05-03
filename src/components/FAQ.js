import React from 'react'

const FAQ = props => {
  return (
    <section id="faq" className="l-faq container" itemscope itemtype="https://schema.org/FAQPage">

    <div className="content d-grid">

      <div className="intro text-xs-center">
        <h3 className="h-2">FAQ</h3>
        <div className="font-sm">Anzeigen einfach digital zu buchen ist neu. Gern beantworten wir all Ihre Fragen dazu.</div>
      </div>

      <div className="faq-wrapper">

        <div className="text-left font-xs column">

          <section data-track="faq-cat-1" className="faq-dropdown border show-first-level">

            <div className="open-dropdown">
              <i className="icon-streamline-icon-arrow-button-down-svgomg first-level-arrow"></i>
              <h5 className="">Wie werden nachhaltige Verpackungen entsorgt?</h5>
            </div>

            <article className="faq-first-level show" data-track="faq-cat-1-1" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <div className="" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p className="answer" itemprop="text">
                  <strong>Wir sind für Sie da!</strong><br></br>
                  <br></br>
                  Schreiben Sie uns eine E-Mail an <a href="mailto:hello@hello.com">hello@hello.com</a>.
                </p>
              </div>

            </article>

          </section>

          <section data-track="faq-cat-1" className="faq-dropdown border">

            <div className="open-dropdown">
              <i className="icon-streamline-icon-arrow-button-down-svgomg"></i>
              <h5 className="">Ist der Druck klimaneutral?</h5>
            </div>

            <article className="faq-first-level" data-track="faq-cat-1-1" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <div className="" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p className="answer" itemprop="text">
                  <strong>Wir sind für Sie da!</strong><br></br>
                  <br></br>
                  Schreiben Sie uns eine E-Mail an <a href="mailto:hello@pryntad.com">hello@pryntad.com</a>.
                </p>
              </div>

            </article>

          </section>

          <section data-track="faq-cat-1" className="faq-dropdown border">

            <div className="open-dropdown">
              <i className="icon-streamline-icon-arrow-button-down-svgomg first-level-arrow"></i>
              <h5 className="">Sind die Materialien aus nachhaltiger Herstellung?</h5>
            </div>

            <article className="faq-first-level" data-track="faq-cat-1-1" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <div className="" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p className="answer" itemprop="text">
                  <strong>Wir sind für Sie da!</strong><br></br>
                  <br></br>
                  Schreiben Sie uns eine E-Mail an <a href="mailto:hello@pryntad.com">hello@pryntad.com</a>.
                </p>
              </div>

            </article>

          </section>

          <section data-track="faq-cat-1" className="faq-dropdown border">

            <div className="open-dropdown">
              <i className="icon-streamline-icon-arrow-button-down-svgomg first-level-arrow"></i>
              <h5 className="">Wer prüft und zertifiziert die Verpackungen?</h5>
            </div>

            <article className="faq-first-level" data-track="faq-cat-1-1" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <div className="" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p className="answer" itemprop="text">
                  <strong>Wir sind für Sie da!</strong><br></br>
                  <br></br>
                  Schreiben Sie uns eine E-Mail an <a href="mailto:hello@pryntad.com">hello@pryntad.com</a>.
                </p>
              </div>

            </article>

          </section>

        </div>

      </div>

    </div>

  </section>
  )
}
export default FAQ

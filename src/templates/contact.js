import { graphql } from "gatsby"
import React from "react"

import Call from "../components/Call"
import Layout from "../components/Layout"

const Contact = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout bodyClass="page-default-single">
    <section id='contact-form' className="l-text-with-image l-contact-simple text-image--right container bg-wht">

    <div className="form-headline d-flex align-item-center justify-content-center flex-column flex-md-row pt-5">
      <img src="svg/checkmark-green.svg" /> <h1 className="text-xs-center m-0 ml-md-3 mt-3 mt-md-0">Hersteller gefunden!</h1>
    </div>

      <div className="content content--centered content--roomy trimmed-4">
        <div className="d-grid grid-inverted align-item-center column-gap-4 row-gap-3">

          <div className="group-description align-self-start">
            <h2 className='mt-0 h-2'>Wer bekommt das unverbindliche Angebot?</h2>
            <p>
              Damit wir Ihnen ein unverbindliches Angebot erstellen können benötigen wir noch Ihre Kontaktdaten.<br></br>
              <br></br>
              Wir werden uns ca. innerhalb eines Werktages bei Ihnen zurückmelden.<br></br>
              <br></br>
              Ihr Team von<br></br>
              NACHHALTIGE-VERPACKUNG.DE
            </p>
            <div className="contact-usp">
            <ul>
              <li>Nur hochwertige Produkte</li>
              <li>Unverbindliches Angebot</li>
              <li>Unabhängige Beratung</li>
            </ul>
            </div>
            <small className="d-block mt-2">Durch Absenden der Anfrage stimme ich dem Kontakt durch die HanseVentures BSJ GmbH zu. Widerruf jederzeit hier möglich.</small>
          </div>

          <div className="group-images align-self-start mt-0">
          <form
            action='https://docs.google.com/forms/d/e/1FAIpQLSc-OV1zn7ycfcu7JJaC6ZNVuDBF1qhaty7tdJFySsVRU_KGFA/formResponse'
            method='post'
            target='hidden_iframe'
            onSubmit='{handleSubmit}'
          >
          <div className='select form-group form-entry-01'>
            <select
              aria-label='Select menu example'
              id='anrede'
              name='entry.1403452405'
              defaultValue='Anrede'
            >
              <option value='Herr'>
                Herr
              </option>
              <option value='Frau'>Frau</option>
            </select>
          </div>

            <div className='form-group form-entry-02'>
              <label className='form-control' htmlFor='fname'>
                Name
              </label>
              <input
                type='text'
                id='fname'
                name='fname'
                name='entry.1805432203'
                required
              />
              <br></br>
            </div>

            <div className='form-group form-entry-03'>
              <label className='form-control' htmlFor='company'>
                Firma (optional)
              </label>
              <input
                required
                type='text'
                id='company'
                name='company'
                name='entry.1262603567'
              />
              <br></br>
            </div>

            <div className='form-group form-entry-04'>
              <label className='form-control' htmlFor='tel'>
                Telefon
              </label>
              <input
                required
                type='text'
                id='tel'
                name='tel'
                name='entry.1262603567'
              />
              <br></br>
            </div>

            <div className='form-group form-entry-05'>
              <label className='form-control' htmlFor='email'>
                E-Mail (optional)
              </label>
              <input
                required
                type='text'
                id='email'
                name='email'
                name='entry.1262603567'
              />
              <br></br>
            </div>

            <input
              id='submit'
              type='submit'
              value='Angebot anfordern'
              className='btn btn-primary py-3'
            ></input>
          </form>
          </div>

        </div>
      </div>

    </section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      fields {
        slug
      }
      html
    }
  }
`

export default Contact

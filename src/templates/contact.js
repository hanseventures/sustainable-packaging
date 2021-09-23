import { graphql, navigate } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const Contact = ({ data, location }) => {

  const handleSubmit = () => {
    navigate('/thankyou/');
  };

  return (
    <Layout bodyClass="page-default-single">

      <Helmet>
        <meta name="robots" content="nofollow, noindex" />
      </Helmet>

      <section id='contact-form' className="l-text-with-image l-contact-simple text-image--right container bg-wht">

        <div className="form-headline d-flex align-item-center justify-content-center flex-column flex-md-row pt-5">
          <img src="svg/checkmark-green.svg" />
          <h1 className="text-xs-center m-0 ml-md-3 mt-3 mt-md-0">Hersteller gefunden!</h1>
        </div>

        <div className="content content--centered content--roomy trimmed-3">
          <div className="d-grid grid-inverted align-item-center column-gap-4 row-gap-3">

            <div className="group-description align-self-start">
              <h2 className='mt-0 h-4'>Wer bekommt das unverbindliche Angebot?</h2>

              <p>
                Damit wir Ihnen ein unverbindliches Angebot erstellen können benötigen wir noch Ihre Kontaktdaten.<br></br>
              </p>
              <p>
                Wir werden uns ca. innerhalb eines Werktages bei Ihnen zurückmelden.<br></br>
              </p>
              <p>
                Ihr Team von<br/>
                SoWirdHeuteVerpackt.de
              </p>

              <div className="contact-usp">
                <ul>
                  <li>Nur hochwertige Produkte</li>
                  <li>Unverbindliches Angebot</li>
                  <li>Unabhängige Beratung</li>
                </ul>
              </div>

              <small className="d-block mt-2">Durch Absenden der Anfrage stimme ich der Kontaktaufnahme durch SoWirdHeuteVerpackt.de zu. Ein Widerruf ist jederzeit möglich.</small>
            </div>

            <div className="group-images align-self-start mt-0">

              <form
                action='https://docs.google.com/forms/d/e/1FAIpQLSccTnG1uRaGZ9KgEWUpf7B1gh2gNrqPiJgdMdDYBGSiuvBdFQ/formResponse'
                method='post'
                target='hidden_iframe'
                onSubmit={handleSubmit}
              >
                <div className='select form-group form-entry-01'>
                  <select
                    aria-label='Select salutation'
                    id='anrede'
                    name='entry.447426616'
                    defaultValue='Anrede'
                    required
                  >
                    <option value="">Anrede</option>
                    <option value='Herr'>Herr</option>
                    <option value='Frau'>Frau</option>
                  </select>
                </div>

                <div className='form-group form-entry-02'>
                  <input
                    className='form-control is-active'
                    type='text'
                    id='name'
                    name='name'
                    name='entry.238740927'
                    required
                  />
                  <label htmlFor='name'>Name</label>
                </div>

                <div className='form-group form-entry-03'>
                  <input
                    className='form-control is-active'
                    type='text'
                    id='company'
                    name='Firma'
                    name='entry.759518630'
                  />
                  <label htmlFor='company'>Firma (optional)</label>
                </div>

                <div className='form-group form-entry-04'>
                  <input
                    className='form-control is-active'
                    type='text'
                    id='telephone'
                    name='telefon'
                    name='entry.261858826'
                    required
                  />
                  <label htmlFor='telephone'>Telefon</label>
                </div>

                <div className='form-group form-entry-05'>
                  <input
                    className='form-control is-active'
                    type='text'
                    id='email'
                    name='email'
                    name='entry.1626642809'
                  />
                  <label htmlFor='email'>E-Mail (optional)</label>
                </div>

                <div className='d-none'>
                  <input
                    type='hidden'
                    id='configuratorForm'
                    name='configuratorForm'
                    name='entry.484512639'
                    value="Konfigurator Formular"
                  />
                </div>

                <div className='d-none'>
                  <input
                    type='hidden'
                    id='configuratorValues'
                    name='configuratorValues'
                    name='entry.100454620'
                    value={JSON.stringify(location.state ? location.state.data : {})}
                  />
                </div>

                <input
                  id='submit'
                  type='submit'
                  value='Angebot anfordern'
                  className='btn btn-primary py-3'
                />
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

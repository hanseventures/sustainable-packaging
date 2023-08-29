import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ThankYou = (props) => {
  const site = props.data.site.siteMetadata

  return (
    <Layout bodyClass='page-thankyou'>
      <SEO title={site.title} />
      <Helmet>
        <meta
          name='robots'
          content='noindex'
        />
        <title>Vielen Dank | greener.de</title>
      </Helmet>
      <section className='l-thank-you content content--roomy'>
        <div className='trimmed-2 text-xs-center'>
          <h1 className='h-2 mt-0'>
            Vielen Dank
          </h1>
          <p className='mb-2'>... für das Interesse in unseren nachhaltigen Verpackungen.</p><p>Ihre Anfrage wurde erfolgreich abgeschickt und wir prüfen nun Ihre Angaben. Wir melden uns i. d. R. innerhalb von 1-2 Werktagen bei Ihnen zurück.</p>

          <img
          alt="thank you illustrations"
          className='min-width-0 '
          src='/images/2/istockphoto-1164173854-612x612.jpg'
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default ThankYou

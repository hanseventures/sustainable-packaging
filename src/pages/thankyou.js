import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ThankYou = (props) => {
  const site = props.data.site.siteMetadata

  return (
    <Layout bodyClass='page-home container'>
      <SEO title={site.title} />
      <Helmet>
        <meta
          name='description'
          content='Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme.'
        />
      </Helmet>
      <section className='l-thank-you content'>
        <h1>Vielen Dank!</h1>
        <img
          alt="thank you illustrations"
          className='min-width-0 '
          src='/images/illustrations/suburban-illustration-03.svg'
        />
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

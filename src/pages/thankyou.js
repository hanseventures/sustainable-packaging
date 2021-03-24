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
      <section className='l-cta content d-flex-md font-wht mt-md-3 m-0 mx-md-auto p-0 px-md-3'>
        <h1>Vielen Dank!</h1>
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

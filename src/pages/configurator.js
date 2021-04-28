import { graphql } from 'gatsby';
import React, {useReducer} from 'react';
import Helmet from 'react-helmet';
import { Wizard } from 'react-use-wizard';

import { Industry, Material, TypeOfPackaging } from '../components/configurator';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import globalContextProvider from '../context/GlobalContextProvider';

const Configurator = props => {
  const site = props.data.site.siteMetadata

  const [form, dispatchForm] = useReducer(globalContextProvider, {});

  return (
    <Layout bodyClass='page-configurator'>
      <SEO title={site.title} />
      <Helmet>
        <meta
          name='description'
          content='Wir richten Co-Working Spaces für dich in deiner Region ein! Trage dich mit deiner PLZ jetzt ein...'
        />
      </Helmet>
      <section>
        <Wizard>
          <Material {...{form, dispatchForm}} />
          <Industry {...{form, dispatchForm}}/>
          <TypeOfPackaging {...{form, dispatchForm}}/>
        </Wizard>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    intro: markdownRemark(fileAbsolutePath: { regex: "/content/configurator.md/" }) {
      html
      frontmatter {
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Configurator

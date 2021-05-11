import { graphql, navigate } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import ContactSimple from '../components/ContactSimple';
import FAQv2 from '../components/FAQv2';
import HeroStaticCentered from '../components/HeroStaticCentered';
import Layout from '../components/Layout';
import PricesAndPlans from '../components/PricesAndPlans';
import SEO from '../components/SEO';
import Success from '../components/Success';
import TestimonialsV2 from '../components/TestimonialsV2';
import TextWithImage from '../components/TextWithImage';
import USP from '../components/USP';
import USPmoreRows from '../components/USPmoreRows';

const Home = props => {
  const site = props.data.site.siteMetadata

  const handleSubmit = () => {
    navigate('/thankyou');
  };

  return (
    <Layout bodyClass='page-home'>

      <SEO title={site.title} />

      <Helmet>
        <meta
          name='description'
          content='Umweltfreundliche Verpackungslösungen ohne Plastik, denn so verpackt man heute!'
        />
      </Helmet>

      <HeroStaticCentered />
      <USP />

      <TextWithImage />

      <Success />
      <PricesAndPlans />
      <USPmoreRows />
      <TestimonialsV2 />
      <FAQv2 />
      <ContactSimple />

    </Layout>
  )
}

export const query = graphql`
  query {
    intro: markdownRemark(fileAbsolutePath: { regex: "/content/home.md/" }) {
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

export default Home

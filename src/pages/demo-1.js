import { graphql, navigate } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import HeroStaticLeft from '../components/HeroStaticLeft';
import HeroStaticCentered from '../components/HeroStaticCentered';
import TextWithImage from '../components/TextWithImage';
import USP from '../components/USP';
import FAQv1 from '../components/FAQv1';
import FAQv2 from '../components/FAQv2';
import CTA from '../components/CTA';
import CTAwithImage from '../components/CTAwithImage';
import Products from '../components/Products';
import Intermission from '../components/Intermission';
import PricesAndServices from '../components/PricesAndServices';
import ContactWithImage from '../components/ContactWithImage';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Onboarding from './onboarding';
import PricesAndPlans from '../components/PricesAndPlans';
import USPmoreRows from '../components/USPmoreRows';
import Success from '../components/Success';
import TestimonialsV1 from '../components/TestimonialsV1';
import TestimonialsV2 from '../components/TestimonialsV2';

const Demo1 = props => {
  const intro = props.data.intro
  const site = props.data.site.siteMetadata
  const shareUrl = typeof window !== `undefined` ? window.location.origin : ''

  const handleSubmit = () => {
    navigate('/thankyou');
  };

  return (
    <Layout bodyClass='page-home'>

      <SEO title={site.title} />

      <Helmet>
        <meta
          name='description'
          content='Wir richten Co-Working Spaces für dich in deiner Region ein! Trage dich mit deiner PLZ jetzt ein...'
        />
      </Helmet>

      {/* Sections used in Sustainable Packaging. */}
      {/*
        <HeroStaticCentered />
        <USP />
        <TextWithImage />
        <Success />
        <PricesAndPlans />
        <USPmoreRows />
        <TestimonialsV2 />
        <FAQv2 />
      */}

      {/* Sections used in Suburban Coworking. */}
      <Onboarding />
      <CTA />
      <TextWithImage />
      <Intermission />
      <CTAwithImage />
      <Products />
      <PricesAndServices />
      <ContactWithImage />

      {/* Random Sections. */}
      {/*
        <HeroStaticLeft />
        <TestimonialsV1 />
        <FAQv1 />
      */}

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

export default Demo1

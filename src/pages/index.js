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
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import CTAwithImage from '../components/CTAwithImage';
import Products from '../components/Products';
import Intermission from '../components/Intermission';
import PricesAndServices from '../components/PricesAndServices';
import ContactWithImage from '../components/ContactWithImage';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Onboarding from './onboarding';
import IconOverview from '../components/IconOverview';
import Testimonials from '../components/Testimonials';

const Home = props => {
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

      <HeroStaticCentered />
      <IconOverview />
      <CTA />
      <USP />
      <Onboarding />
      <CTAwithImage />
      <Testimonials />
      <FAQ />

      <TextWithImage />
      {/* content should be flipped by className */}
      <TextWithImage />

      {/* This section is an example of aboves component and the content should be replaced with this. */}
      <section className='l-locations content content--roomy d-flex-md flex-md-row-reverse'>
        <img
          alt={intro.frontmatter.first_section}
          className='min-width-0 mb-3'
          src='/images/illustrations/suburban-illustration-03.svg'
        />
        <div>
          <h2>Zu den Locations</h2>
          <p>
            Wir wollen nicht 100 Leute in einer Location haben. Deshalb sind wir
            auf der Suche nach <strong>kleinen leerstehenden Gewerbeflächen</strong>.
          </p>
          <p>
            Sobald eine Location gefunden wurde, wird diese von unseren
            Innenarchitekten ausgestattet.
          </p>
        </div>
      </section>

      <Intermission />
      <Products />
      <HeroStaticLeft />
      <PricesAndServices />
      <ContactWithImage />

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

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
import ContactSimple from '../components/ContactSimple';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Onboarding from './onboarding';
import PricesAndPlans from '../components/PricesAndPlans';
import USPmoreRows from '../components/USPmoreRows';
import Success from '../components/Success';
import TestimonialsV1 from '../components/TestimonialsV1';
import TestimonialsV2 from '../components/TestimonialsV2';

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
      <USP />

      {/* This section is like the component TextWithImage, but should be flipped vertically with. */}
      <section className="l-text-with-image text-image--right container bg-wht">

        <div className="content content--centered content--roomy trimmed-4">
          <div className="d-grid align-item-center column-gap-4 row-gap-3">

            <div className="group-description">
              <h3>Nachhaltige Materialien</h3>
              <p>Viele nachwachsende Rohstoffe stehen der ursprünglichen Plastikverpackung kaum oder gar nicht mehr nach und die Auswahl an nachhaltigen Materialien ist heutzutage sehr vielfältig und wächst stetig weiter.</p>
              <p>Zu den häufigsten alternativen Materialien gehören: Bambus, Holzfaser, Reis und Mais.</p>
              <p>Wir stellen Nachhaltigkeit durch XYZ sicher.</p>
            </div>

            <div className="group-images">
              <img
                src="/images/2/nachhaltige-materialien.jpg"
                className="my-3"
                alt={intro.frontmatter.first_section}
              />
            </div>

          </div>
        </div>

      </section>

      <TextWithImage />

      {/* This section is like the component TextWithImage, but should be flipped vertically with. */}
      <section className="l-text-with-image text-image--right container bg-wht">

        <div className="content content--centered content--roomy trimmed-4">
          <div className="d-grid align-item-center column-gap-4 row-gap-3">

            <div className="group-description">
              <h3>Was ist möglich?</h3>
              <p>Fast alle Verpackungen können heutzutage nachhaltig hergestellt werden, von der Take-Away-Verpackung, über Becher bis zum Versandkarton im Spezialformat können wir alles für sie realisieren und das bereits ab kleinen Stückzahlen.</p>
              <p>Teilen Sie uns über unseren Konfigurator ihre Wunschverpackung mit, damit wir Ihnen ein unverbindliches Angebot erstellen können.</p>
              <a
                href="#"
                className='btn btn-primary mt-3'
                onClick={()=> navigate('/configurator')}
                title="title"
              >
                Konfigurator starten
              </a>
            </div>

            <div className="group-images">
              <img
                src="/images/2/nachhaltige-materialien.jpg"
                className="my-3"
                alt={intro.frontmatter.first_section}
              />
            </div>

          </div>
        </div>

      </section>

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

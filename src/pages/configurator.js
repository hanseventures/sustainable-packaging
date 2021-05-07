import { graphql } from 'gatsby';
import React, { useReducer } from 'react';
import Helmet from 'react-helmet';
import { Wizard } from 'react-use-wizard';

import { Step01, Step02, Step03, Step04, Step05, Step06, Step07, Step08, Step09, Step10 } from '../components/configurator';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import globalContextProvider from '../context/GlobalContextProvider';

const Configurator = props => {
  const site = props.data.site.siteMetadata

  const [form, dispatchForm] = useReducer(globalContextProvider, {})

  return (
    <Layout bodyClass='l-page-configurator'>
      <SEO title={site.title} />

      <Helmet>
        <meta
          name='description'
          content='Wir richten Co-Working Spaces für dich in deiner Region ein! Trage dich mit deiner PLZ jetzt ein...'
        />
      </Helmet>

      <section className='content content--roomy'>
        <Wizard>
          <Step01 {...{form, dispatchForm}}/>
          <Step02 {...{form, dispatchForm}}/>
          <Step03 {...{form, dispatchForm}}/>
          <Step04 {...{form, dispatchForm}}/>
          <Step05 {...{form, dispatchForm}}/>
          <Step06 {...{form, dispatchForm}}/>
          <Step07 {...{form, dispatchForm}}/>
          <Step08 {...{form, dispatchForm}}/>
          <Step09 {...{ form, dispatchForm }} />
          <Step10 {...{ form, dispatchForm }} />
        </Wizard>
      </section>

      <section className='wizard-usp d-flex flex-column flex-md-row justify-content-center font-xs'>
        <div className=''>
          <svg
            viewBox='0 0 20 20'
            height='20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)'>
              <path
                d='M23.25.749,8.158,22.308a2.2,2.2,0,0,1-3.569.059L.75,17.249'
                fill='none'
                stroke='#7EA425'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
              ></path>
            </g>
          </svg>
          <span>Schnelle Angaben zum Produkt machen</span>
        </div>
        <div className='mx-md-3'>
          <svg
            viewBox='0 0 20 20'
            height='20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)'>
              <path
                d='M23.25.749,8.158,22.308a2.2,2.2,0,0,1-3.569.059L.75,17.249'
                fill='none'
                stroke='#7EA425'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
              ></path>
            </g>
          </svg>
          <span>Einfach und unverbindlich ausfüllen</span>
        </div>
        <div className=''>
          <svg
            viewBox='0 0 20 20'
            height='20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g transform='matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)'>
              <path
                d='M23.25.749,8.158,22.308a2.2,2.2,0,0,1-3.569.059L.75,17.249'
                fill='none'
                stroke='#7EA425'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
              ></path>
            </g>
          </svg>
          <span>Kostenlose Expertenberatung</span>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    intro: markdownRemark(
      fileAbsolutePath: { regex: "/content/configurator.md/" }
    ) {
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

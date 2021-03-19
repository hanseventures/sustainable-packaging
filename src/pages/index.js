import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Slides from '../components/Slides';

class Onboarding extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 1,
      slides: props.data.allSlidersJson.edges
    }
  }

  nextStep = () => {
    let step = this.state.step
    step++

    this.setState({ step: step })
  }

  render () {
    const isLastStep = this.state.slides.length === this.state.step
    return (
      <Layout bodyClass="onboarding">
       <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="Onboarding" >
        <div className='Background' data-step={this.state.step}></div>
        <Slides step={this.state.step} slides={this.state.slides} />
        <div className='Footer' data-step={this.state.step} >
          <div className='Dots' data-step={this.state.step}>
            {this.state.slides.map((_,index) => (
              <div className='Dot' key={index} />
            ))}
          </div>
          { isLastStep ?
          (
            <Link to='/home' className='Button signup'>Direkt anmelden</Link>
           ) : (
          <div
          className='Button Button--next'
          onClick={this.nextStep}
          >
            Weiter
          </div>)
          }
        </div>
      </div>
      </Layout>)
  }
}

const props = () => (
  <StaticQuery
    query={graphql`
      query OnboardingQuery {
        allSlidersJson {
          edges {
            node {
              logo
              title
              text
            }
          }
        }
      }
    `}
    render={data => <Onboarding data={data} />}
  />
)

export default props

import { graphql, Link, navigate, StaticQuery } from 'gatsby';
import React from 'react';

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
      <div className='l-onboarding' data-step={this.state.step}>
        <div className='logo mx-3 mt-3'>
          <Link className='d-block' to='/'>
            <img
              alt='Suburban Coworking Logo'
              src='/images/logo/suburban-coworking-logo-white.svg'
            />
          </Link>
        </div>

        <Slides step={this.state.step} slides={this.state.slides} />

        <div className='footer mt-3 mb-5' data-step={this.state.step}>
          <div className='d-flex flex-column flex-lg-row mx-3 mx-md-0'>
            <div className='btn btn-secondary' onClick={()=> navigate('/configurator')}>
              Configurator
            </div>
          </div>
        </div>

        <div
          className='background pos-relative black-overlay'
          data-step={this.state.step}
        ></div>
      </div>
    )
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

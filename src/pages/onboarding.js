import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

import Slides from "../components/Slides"

class Onboarding extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      slides: props.data.allSlidersJson.edges,
    }
  }

  nextStep = () => {
    let step = this.state.step
    step++

    this.setState({ step: step })
  }

  render() {
    const isLastStep = this.state.slides.length === this.state.step
    return (
      <div className="l-onboarding">
      <div className="logo">
        <Link to="/">
          <img
            height="60px"
            alt="Suburban Coworking Logo"
            src="/images/logo/suburban-coworking-logo-white.svg"
          />
        </Link>
      </div>
        <div className="background position-relative black-overlay" data-step={this.state.step}></div>
        <Slides step={this.state.step} slides={this.state.slides} />
        <div className="footer d-flex flex-wrap mx-auto my-3" data-step={this.state.step}>
          <div className="dot-wrapper" data-step={this.state.step}>
            {this.state.slides.map((_, index) => (
              <div className="dot-item" key={index} />
            ))}
          </div>
          {isLastStep ? (
            <Link to="#contact-form" className="btn btn-secondary signup">
              Direkt anmelden
            </Link>
          ) : (
            <div className="btn btn-secondary" onClick={this.nextStep}>
              Weiter
            </div>
          )}
        </div>
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

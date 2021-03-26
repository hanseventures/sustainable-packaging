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
          <Link className="d-block p-3 p-md-4" to="/">
            <img
              alt="Suburban Coworking Logo"
              src="/images/logo/suburban-coworking-logo-white.svg"
            />
          </Link>
        </div>

        <div className="background pos-relative black-overlay" data-step={this.state.step}></div>

        <Slides step={this.state.step} slides={this.state.slides} />

        <div className="footer mt-3 mb-5" data-step={this.state.step}>

          {isLastStep ? (
            <div className="d-flex flex-column flex-lg-row mx-3 mx-md-0">
              <Link to="#intro" className="btn btn-secondary">
                Das erwartet dich
              </Link>
              <Link to="#contact-form" className="btn btn-primary mt-2 mt-lg-0">
                Direkt anmelden
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-column flex-lg-row mx-3 mx-md-0">
              <div className="btn btn-secondary" onClick={this.nextStep}>
                Weiter
              </div>
              <Link to="#contact-form" className="btn btn-outline mt-2 mt-lg-0">
                Direkt anmelden
              </Link>
            </div>
          )}

        </div>

        <div className="dot-wrapper mb-1 m-md-3" data-step={this.state.step}>
          {this.state.slides.map((_, index) => (
            <div className="dot-item" key={index} />
          ))}
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

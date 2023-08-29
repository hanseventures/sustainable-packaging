import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

import Hamburger from "./Hamburger"
import Menu from "./Menu"
import MenuMobile from "./MenuMobile"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }))
  }

  render() {
    const config = this.props.data.configJson
    return (
      <header>
        <div className="container d-flex justify-space-between align-item-center box-sizing-border-box py-2 px-4">
          <div className="logo">
            <Link to="/">
              <img
                height={config.logo.desktop_height}
                width="300"
                alt={config.logo.alt}
                src={config.logo.desktop}
                className="logo"
              />
            </Link>
          </div>

          <div className="hotline d-none d-md-block">
            <b>Hotline:</b> <a href="tel:+4940303886619">+49 40 - 303 88 66 19</a>
          </div>

        </div>
      </header>
    )
  }
}

const props = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        configJson {
          logo {
            alt
            desktop
            mobile
            desktop_height
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)

export default props

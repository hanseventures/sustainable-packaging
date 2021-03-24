import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="l-footer container bg-primary font-wht">
      <div className="content content--low">
        <img
          className="logo"
          src="/images/logo/suburban-coworking-logo-white.svg"
        />
        <p>Wir richten Co-Working Spaces in deiner Region ein!</p>
        <ul className="list-style-type-none">
          {data.allFooterMenuJson.edges.map(({ node }) => (
            <li key={node.name} className="text-decoration-underline">
              <Link to={node.url}>{node.name}</Link>
            </li>
          ))}
        </ul>
        <h3 className="font-wht">Kontakt</h3>
        <p>
          <b>Tel.:</b> 040/ 12345678 <br></br>
          <b>Mail:</b> <a href="mailto:info@suburban-coworking.de">info@suburban-coworking.de</a>
        </p>

        <small>2021 Copyright - a Hanse Ventures BSJ GmbH Company</small>
      </div>
    </div>
  )
}

export default Footer

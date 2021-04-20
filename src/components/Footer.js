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
        <div className="d-flex-lg column-gap-5 flex-space-between">
          <div>
            <img
              className="logo"
              src="/images/logo/suburban-coworking-logo-white.svg"
            />
            <p>Wir richten Co-Working Spaces in deiner Region ein!</p>
          </div>

          <div className='d-flex flex-wrap column-gap-5 mt-5 mt-xl-3'>
            <div>
              <h3 className="font-wht">Unternehmen</h3>
              <ul className="list-none list-vertical">
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.name} className="text-decoration-underline">
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-wht">Kontakt</h3>
              <p>
                <strong>Tel.:</strong> +49 (0)40 303 88 66 12<br/>
                <strong>Mail:</strong> <a href="mailto:info@suburbancoworking.de">info@suburbancoworking.de</a>
              </p>
            </div>
          </div>
        </div>

        <div className='text-lg-center mt-4'>
          <small>2021 Copyright - a Hanse Ventures BSJ GmbH Company</small>
        </div>
      </div>
    </div>
  )
}

export default Footer

import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            id
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
    <div className="l-footer container bg-primary font-black">
      <div className="content content--low">
        <div className="d-flex-lg column-gap-5 flex-space-between">
          <div>
          <img
             className="logo"
             src="/images/logo@2x.png"
           />
            <p className="my-0">Umweltbewusste Verpackung für jedermann</p>
          </div>

          <div className='d-flex flex-wrap column-gap-5 mt-0 mt-xl-3 align-item-end'>
            <div>
              <ul className="list-none list-vertical d-flex my-0">
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.id} className="font-xs mx-1 my-0">
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul>
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

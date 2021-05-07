import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const MobileMenu = props => {
  const data = useStaticQuery(graphql`
    query MainMobileMenuQuery {
      allMainMenuJson {
        edges {
          node {
            id
            name
            url
            weight
          }
        }
      }
    }
  `)
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? "open" : ""}`}
    >
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.url} activeClassName="active">
              {node.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu

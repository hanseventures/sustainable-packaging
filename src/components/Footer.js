import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

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
  `);
  return (
    <div className="l-footer container bg-primary font-wht">
      <div className=" content">
              <h3 className="footer-title">{data.site.siteMetadata.title}</h3>
              <p>Wir richten Co-Working Spaces in deiner Region ein!</p>
              <ul>
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.name}>
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-wht">Kontakt</h3>
              <p>
                Tel.: 040/ 12345678 <br></br>
                Mail: <a href="mailto:aaa@aaa.de">info@suburban-coworking.de</a>
              </p>

              <small>2021 Copyright - a Hanse Ventures BSJ GmbH Company</small>
      </div>
    </div>
  );
};

export default Footer;

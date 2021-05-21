import { graphql, navigate, useStaticQuery } from 'gatsby';
import React from 'react';

const TextWithImage = props => {
  const { allTextWithImageJson } = useStaticQuery(graphql`
  query TextWithImageQuery {
  allTextWithImageJson {
    edges {
      node {
        id
        image
        image_position
        text
        headline
        button
        content_spacing
        alt
      }
    }
  }
}
`)

  return (
    <>
      {allTextWithImageJson.edges.map(({ node }) => (
        <section
          className={`l-text-with-image container bg-wht ${node.image_position}`}
          key={node.id}
        >
          <div className={`content content--centered ${node.content_spacing} trimmed-4 d-grid align-item-center column-gap-4 row-gap-3`}>

            <div className="group-description">
              <h3>{node.headline}</h3>
              <span dangerouslySetInnerHTML={{ __html: node.text }}></span>
              <a
                href="#"
                className="btn btn-primary mt-3"
                onClick={()=> navigate('/configurator')}
              >
                {node.button}
              </a>
            </div>
            <div className="group-images">
              <img
                src={node.image}
                className="my-3"
                alt={node.alt}
              />
            </div>
          </div>
        </section>))}
    </>
  )
}

export default TextWithImage

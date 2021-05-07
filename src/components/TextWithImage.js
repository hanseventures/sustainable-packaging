import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

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
        alt
      }
    }
  }
}
`)

  return (
    <>
      {allTextWithImageJson.edges.map(({ node }) => (
        <section className=""
        className={`l-text-with-image container bg-wht ${ node.image_position }`}
        >
          <div className="content content--centered content--roomy trimmed-4 d-grid align-item-center column-gap-4 row-gap-3">

            <div className="group-description">
              <h3>{node.headline}</h3>
              <p dangerouslySetInnerHTML={{ __html: node.text }}></p>
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

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import StarIcon from '../../static/svg/star.svg';

const TestimonialsV2 = props => {
  const { allTestimonialsJson } = useStaticQuery(graphql`
    query TestimonialsQuery {
      allTestimonialsJson {
        edges {
          node {
            id
            image_path
            first_name
            last_name
            position
            ratings
            comments
          }
        }
      }
    }
  `)

  return (
    <section className='l-testimonials-v2 container bg-grn-gradient'>
      <div className='content content--roomy d-grid'>
        <h3 className='font-wht text-xs-center'>Das sagen unsere Kunden</h3>

        <div className='d-flex flex-column flex-md-row emulated-flex-gap trimmed-4 mt-5 text-xs-center'>
          {allTestimonialsJson.edges.map(({ node }) => (
            <article className='card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3'  key={node.id}>
              <img src={node.image_path} alt='avatar'></img>

              <div className='mt-3'>
                <strong>
                  {node.first_name} {node.last_name}
                </strong>
                <br />
                <small>{node.position}</small>
                <br />
                <div className='d-flex justify-content-center column-gap-1 mt-2'>
                  {[...Array(node.ratings)].map((el, index) => (<StarIcon key={index} />) )}
                </div>
              </div>

              <blockquote className='mt-3 mb-0 mx-0'>
              {node.comments}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default TestimonialsV2

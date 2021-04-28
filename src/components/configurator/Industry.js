import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useWizard } from 'react-use-wizard'

const Industry = () => {
  const data = useStaticQuery(graphql`
    query IndustryQuery {
      allIndustryDataJson {
        edges {
          node {
            id
            text
            iconClass
          }
        }
      }
    }
  `)

  const [activeId, setActiveId] = useState()

  const {
    handleStep,
    nextStep,
    previousStep,
    isLoading,
    isFirstStep
  } = useWizard()

  // Attach an optional handler
  handleStep(() => {
    console.log('Industry')
  })

  return (
    <>
      <ul className='box'>
        {data.allIndustryDataJson.edges.map(({ node }) => (
          <li
            key={node.id}
            className={activeId === node.id ? 'active' : ''}
            onClick={() => setActiveId(node.id)}
          >
            <span>{node.text}</span>
          </li>
        ))}
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-4 m-3  flex-lg-row'>
        <div className='btn btn-secondary mr-3' onClick={() => previousStep()}>
          Previous
        </div>
        <div className='btn btn-secondary ml-3' onClick={() => nextStep()}>
          Next
        </div>
      </div>
    </>
  )
}

export default Industry

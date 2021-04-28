import { navigate, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { useWizard } from 'react-use-wizard'

const TypeOfPackaging = () => {
  const data = useStaticQuery(graphql`
    query TypeOfPackagingQuery {
      allPackagingDataJson {
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
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    previousStep,
    nextStep,
    handleStep
  } = useWizard()

  // Attach an optional handler
  handleStep(() => {
    console.log('TypeOfPackaging')
  })

  return (
    <>
      <ul className='box'>
        {data.allPackagingDataJson.edges.map(({ node }) => (
          <li
            key={node.id}
            className={activeId === node.id ? 'active':''}
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
        {!isLastStep ? (
          <div className='btn btn-secondary ml-3' onClick={() => nextStep()}>
            Next
          </div>
        ) : (
          <div
            className='btn btn-secondary ml-3'
            onClick={() => navigate('/contact')}
          >
            Search
          </div>
        )}
      </div>
    </>
  )
}

export default TypeOfPackaging

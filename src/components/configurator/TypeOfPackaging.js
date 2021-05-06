import { navigate, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useWizard } from 'react-use-wizard'

const TypeOfPackaging = (props) => {
  const {allPackagingDataJson} = useStaticQuery(graphql`
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

  const {
    isLastStep,
    previousStep,
    nextStep,
  } = useWizard()

  return (
    <>
    <h1>Branche wählen</h1>
      <ul className='box'>
        {allPackagingDataJson.edges.map(({ node }) => (
          <li
            key={node.id}
            className={props.form.packagingId === node.id ? 'active':''}
            onClick={() =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { packagingId: node.id }
              })
            }
          >
            <img src="images\1\microwave.svg"/>
            <span>{node.text}</span>
          </li>
        ))}
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div className='btn btn-secondary mr-1 mr-md-3' onClick={() => previousStep()}>
          Previous
        </div>
        {!isLastStep ? (
          <div className='btn btn-secondary ml-1 ml-md-3' onClick={() => nextStep()}>
            Next
          </div>
        ) : (
          <div
            className='btn btn-secondary ml-1 ml-md-3'
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

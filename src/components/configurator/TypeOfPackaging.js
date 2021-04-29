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
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    previousStep,
    nextStep,
    handleStep
  } = useWizard()

  const filterById = () => allMaterialDataJson.edges.filter(({node}) => node.id === props.form.industryId)

  // Attach an optional handler
  handleStep(() => {
    console.log(`object`, filterById() )
  })

  return (
    <>
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

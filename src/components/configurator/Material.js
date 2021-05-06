import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useWizard } from 'react-use-wizard';

const Material = (props) => {

  const {allMaterialDataJson} = useStaticQuery(graphql`
    query MaterialQuery {
      allMaterialDataJson {
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
    handleStep,
    nextStep,
    previousStep,
    isLoading,
    isFirstStep
  } = useWizard()

  const filterById = () => allMaterialDataJson.edges.filter(({node}) => node.id === props.form.industryId)

  // Attach an optional handler
  handleStep(() => {
    console.log(`object`, filterById() )
  })

  return (
    <>
    <h1>Material wählen</h1>
      <ul className='box'>
        {allMaterialDataJson.edges.map(({ node }) => (
          <li key={node.id}
            className={props.form.materialId === node.id ? 'active' : ''}
            onClick={() =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { materialId: node.id }
              })
            }>
            <img src="images\1\microwave.svg"/>
            <span>{node.text}</span>
          </li>
        ))}
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div
          className='btn btn-secondary mr-1 mr-md-3'
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </div>
        <div className='btn btn-secondary ml-1 ml-md-3' onClick={() => nextStep()}>
          Next
        </div>
      </div>
    </>
  )
}

export default Material

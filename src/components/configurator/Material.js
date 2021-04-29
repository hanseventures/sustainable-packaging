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

  const filterById = (id) => allMaterialDataJson.edges.filter(({node}) => node.id === id)

  // Attach an optional handler
  handleStep(() => {
    console.log(`object`, filterById(props.form.materialId) )
  })

  return (
    <>
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
            <span>{node.text}</span>
          </li>
        ))}
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-4 m-3  flex-lg-row'>
        <div
          className='btn btn-secondary mr-3'
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </div>
        <div className='btn btn-secondary ml-3' onClick={() => nextStep()}>
          Next
        </div>
      </div>
    </>
  )
}

export default Material

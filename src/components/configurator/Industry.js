import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useWizard } from 'react-use-wizard'

const Industry = (props) => {
  const {allIndustryDataJson} = useStaticQuery(graphql`
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

  const {
    handleStep,
    nextStep,
    previousStep,
  } = useWizard()

  const filterById = () => allIndustryDataJson.edges.filter(({node}) => node.id === props.form.industryId)

  handleStep(() => {
    console.log(`object`, filterById() )
  });

  return (
    <>
    <h1>Branche wählen</h1>
      <ul className='box'>
        {allIndustryDataJson.edges.map(({ node }) => (
          <li
            key={node.id}
            className={props.form.industryId === node.id ? 'active' : ''}
            onClick={() =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { industryId: node.id }
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
        <div className='btn btn-secondary ml-1 ml-md-3' onClick={() => nextStep()}>
          Next
        </div>
      </div>
    </>
  )
}

export default Industry

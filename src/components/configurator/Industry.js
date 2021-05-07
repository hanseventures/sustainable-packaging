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
            imagePath
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
      <h1 className="h-2 text-xs-center">Branche wählen</h1>

      <div className="progress-bar trimmed-2 mt-4">
        <div className="active step-01"></div>
        <div className="non-active"></div>
      </div>

      <ul className='list-none d-grid box trimmed-3 my-5'>
        {allIndustryDataJson.edges.map(({ node }) => (
          <li
            key={node.id}
            className={props.form.industryId === node.id ? 'p-3 active' : 'p-3'}
            onClick={() =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { industryId: node.id }
              })
            }
          >
            <img src={node.imagePath} className="mb-2" />
            <strong>{node.text}</strong>
          </li>
        ))}
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div className='btn btn-secondary mr-1 mr-md-3' onClick={() => previousStep()}>
          Zurück
        </div>
        <div className='btn btn-primary ml-1 ml-md-3' onClick={() => nextStep()}>
          Weiter
        </div>
      </div>
    </>
  )
}

export default Industry

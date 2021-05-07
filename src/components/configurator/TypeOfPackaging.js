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
    <h1 className="h-2 text-xs-center">Verpackungsart wählen</h1>
    <div className="progress-bar trimmed-2 mt-4">
      <div className="active step-03"></div>
      <div className="non-active"></div>
    </div>
    <ul className='list-none d-grid box trimmed-3 my-5'>
        {allPackagingDataJson.edges.map(({ node }) => (
          <li
            key={node.id}
            className={props.form.packagingId === node.id ? 'p-3 active' : 'p-3'}
            onClick={() =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { packagingId: node.id }
              })
            }
          >
            <img src="svg/streamline-icon-shipment-upload@46x46.svg" className="mb-2" />
            <span>{node.text}</span>
          </li>
        ))}
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div className='btn btn-secondary mr-1 mr-md-3' onClick={() => previousStep()}>
          Zurück
        </div>
        {!isLastStep ? (
          <div className='btn btn-secondary ml-1 ml-md-3' onClick={() => nextStep()}>
            Weiter
          </div>
        ) : (
          <div
            className='btn btn-secondary ml-1 ml-md-3'
            onClick={() => navigate('/contact')}
          >
            Suchen
          </div>
        )}
      </div>
    </>
  )
}

export default TypeOfPackaging

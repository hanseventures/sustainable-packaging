import React from 'react'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import { useWizard } from 'react-use-wizard'

const Step04 = (props) => {

  const {configuratorJson} = useStaticQuery(graphql`
    query Step04Query {
      configuratorJson(progressbar: {eq: "04"}) {
        id
        title
        progressbar
        btnPrevious
        btnNext
        nodes {
          id
          iconClass
          imagePath
          text
        }
      }
    }
  `)

  const {
    handleStep,
    nextStep,
    previousStep,
    isLoading,
    isFirstStep,
    isLastStep
  } = useWizard()

  const filterById = () => configuratorJson.nodes.filter((node) => node.id === props.form.industryId)

  // Attach an optional handler
  handleStep(() => {
    console.log(`object`, filterById() )
  })

  return (
    <>
      <h1 className="h-2 text-xs-center">{configuratorJson.title}</h1>

      <div className="progress-bar trimmed-2 mt-4">
        <div className={`active step-${ configuratorJson.progressbar }`}></div>
        <div className="non-active"></div>
      </div>

      <ul className='list-none d-grid box trimmed-4 my-5'>
        {configuratorJson.nodes.map((node) => (
          <li
            key={node.id}
            className={props.form.step04ID === node.id ? 'p-3 active' : 'p-3'}
            onClick={() =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { step04ID: node.id }
              })
            }>
            <img src="svg/streamline-icon-medical-specialty-skin@46x46.svg" className="mb-2" />
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
          {configuratorJson.btnPrevious}
        </div>
        {!isLastStep ? (
        <div
          className='btn btn-primary ml-1 ml-md-3'
          onClick={() => nextStep()}
        >
          {configuratorJson.btnNext}
        </div>
        ) : (
        <div
          className='btn btn-primary ml-1 ml-md-3'
          onClick={() => navigate('/contact')}
        >
          {configuratorJson.btnNext}
        </div>
        )}
      </div>
    </>
  )
}

export default Step04

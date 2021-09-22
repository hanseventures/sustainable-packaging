import { navigate } from 'gatsby'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useWizard } from 'react-use-wizard'

import { hasSelected } from './helpers'
import MultiSelect from './MultiSelect'
import Spinner from './spinner'

const Step11 = (props) => {

  const configuratorJson = _.filter(
    props.objects,
    obj => obj.node.parent.name === "stepData11"
  )[0].node

  const {
    nextStep,
    previousStep,
    isLoading,
    isFirstStep,
    activeStep,
    handleStep
  } = useWizard()

  // Attach an optional handler
  handleStep(() => {
   window.scrollTo(0, 0)
  })

  useEffect(() => {
    window.dataLayer.push({
      event: 'configurator-step',
      name: `configurator/${ configuratorJson.progressbar }-${ configuratorJson.gaName }`
    })
  },[])

  return (
    <>
      <h1 className="h-2 text-xs-center">{configuratorJson.title}</h1>

      <div className="progress-bar trimmed-2 mt-4">
        <div className={`active step-${configuratorJson.progressbar}`}></div>
        <div className="non-active"></div>
      </div>

      <MultiSelect
        id={configuratorJson.title}
        objects={configuratorJson.nodes}
        handleSelection={props.handleSelect}
        selectedObjects={props.selectedObjects}
        gaName={configuratorJson.gaName}
      />

      <small className='d-block text-xs-center mb-3'>Mehrfachauswahl möglich</small>

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div
          className='btn btn-secondary mr-1 mr-md-3'
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          {configuratorJson.btnPrevious}
        </div>
        <div
          id={`${configuratorJson.gaName}-${configuratorJson.btnPrevious.toLowerCase()}`}
          className='btn btn-primary ml-1 ml-md-3'
          onClick={() => nextStep(Number(activeStep)+1)}
        >
          {configuratorJson.btnNext}
        </div>
      </div>
    </>
  )
}

export default Step11

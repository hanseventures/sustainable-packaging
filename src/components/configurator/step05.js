import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useWizard } from 'react-use-wizard'

import { hasSelected } from './helpers'
import MultiSelect from './MultiSelect'

const Step05 = props => {
  const configuratorJson = _.filter(
    props.objects,
    obj => obj.node.parent.name === "stepData05"
  )[0].node

  const { nextStep, previousStep,activeStep,
    handleStep
  } = useWizard()

  // Attach an optional handler
  handleStep(() => {
   window.scrollTo(0, 0)
  })

  return (
    <>
      <h1 className='h-2 text-xs-center'>{configuratorJson.title}</h1>

      <div className='progress-bar trimmed-2 mt-4'>
        <div className={`active step-${configuratorJson.progressbar}`}></div>
        <div className='non-active'></div>
      </div>

      <MultiSelect
        id={configuratorJson.id}
        objects={configuratorJson.nodes}
        handleSelection={props.handleSelect}
        selectedObjects={props.selectedObjects}
        gaName={configuratorJson.gaName}
      />

      <small className='d-block text-xs-center mb-3'>Mehrfachauswahl möglich</small>

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div
          id={`${configuratorJson.gaName}-${configuratorJson.btnPrevious.toLowerCase()}`}
          className='btn btn-secondary mr-1 mr-md-3'
          onClick={() => previousStep()}
        >
          {configuratorJson.btnPrevious}
        </div>
        <div
          id={`${configuratorJson.gaName}-${configuratorJson.btnNext.toLowerCase()}`}
          className={`btn btn-${
            hasSelected(props.selectedObjects, configuratorJson.id)
              ? 'primary'
              : 'secondary'
          } ml-1 ml-md-3`}
          onClick={() => nextStep(Number(activeStep)+1)}
        >
          {configuratorJson.btnNext}
        </div>
      </div>
    </>
  )
}

export default Step05

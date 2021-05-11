import _ from 'lodash'
import React from 'react'
import { useWizard } from 'react-use-wizard'

import { hasSelected } from './helpers'
import MultiSelect from './MultiSelect'

const Step04 = props => {
  const configuratorJson = _.filter(
    props.objects,
    obj => obj.node.progressbar === 4
  )[0].node

  const { nextStep, previousStep } = useWizard()

  // const filterById = () => configuratorJson.nodes.filter((node) => node.id === props.form.step04ID)

  // // Attach an optional handler
  // handleStep(() => {
  //   console.log(`object`, filterById() )
  // })

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
      />

      <div className='d-flex flex-column justify-content-center align-self-center p-1 m-1 mb-4 flex-row flex-lg-row'>
        <div
          className='btn btn-secondary mr-1 mr-md-3'
          onClick={() => previousStep()}
        >
          {configuratorJson.btnPrevious}
        </div>
        <div
          className={`btn btn-${
            hasSelected(props.selectedObjects, configuratorJson.id)
              ? 'primary'
              : 'secondary'
          } ml-1 ml-md-3`}
          onClick={() => nextStep()}
        >
          {configuratorJson.btnNext}
        </div>
      </div>
    </>
  )
}

export default Step04

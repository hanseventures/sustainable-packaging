import { navigate } from 'gatsby'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useWizard } from 'react-use-wizard'

import { hasSelected } from './helpers'
import MultiSelect from './MultiSelect'
import Spinner from './spinner'

const Step11 = (props) => {

  const configuratorJson = _.filter(props.objects, (obj) => obj.node.progressbar === 11)[0].node

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  const {
    nextStep,
    previousStep,
    isLoading,
    isFirstStep,
    isLastStep
  } = useWizard()

  const RedirectHandeler = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      setShow(!show);
      navigate('/contact')
    }, 5000);
  };

  if (loading) return <Spinner />;


  // const filterById = () => configuratorJson.nodes.filter((node) => node.id === props.form.step11ID)

  // // Attach an optional handler
  // handleStep(() => {
  //   console.log(`object`, filterById() )
  // })

  return (
    <>
      <h1 className="h-2 text-xs-center">{configuratorJson.title}</h1>

      <div className="progress-bar trimmed-2 mt-4">
        <div className={`active step-${ configuratorJson.progressbar }`}></div>
        <div className="non-active"></div>
      </div>

      <MultiSelect
        id={configuratorJson.id}
        objects={configuratorJson.nodes}
        handleSelection={props.handleSelect}
        selectedObjects={props.selectedObjects}
        gaName={configuratorJson.gaName}
      />

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
          id={`${configuratorJson.gaName}-${configuratorJson.btnPrevious.toLowerCase()}`}
          className='btn btn-primary ml-1 ml-md-3'
          onClick={() => nextStep()}
        >
          {configuratorJson.btnNext}
        </div>
        ) : (
        <div
          id={`${configuratorJson.gaName}-${configuratorJson.btnNext.toLowerCase()}`}
          className={`btn btn-${hasSelected(props.selectedObjects, configuratorJson.id) ?   'primary' : 'secondary'  } ml-1 ml-md-3`}
          onClick={() => RedirectHandeler()}
        >
          {configuratorJson.btnNext}
        </div>
        )}
      </div>
    </>
  )
}

export default Step11

import { navigate } from 'gatsby'
import _ from 'lodash'
import React, { useState } from 'react'
import { useWizard } from 'react-use-wizard'

import Spinner from './spinner'

const Details = (props) => {
  const configuratorJson = _.first(_.filter(
    props.objects,
    obj => obj.node.pageId === 'details'
  )).node

  const [loading, setLoading] = useState(false);

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
      navigate('/contact')
    }, 30000);
  };

  let selected = []

  props.selectedObjects.map(node => {
    selected.push(Object.values(node))
  })

  return (
    <>
      { !loading ?
        (<>
          <h1 className="h-2 text-xs-center">{configuratorJson.title}</h1>
          <ul className='list-none d-flex box trimmed-4 text-xs-center my-5'>
            {_.flatMapDeep(selected).map((node, i) => (
              <li
                key={i}
                className='p-3 active'
              >
                <img src={node.imagePath} className='mb-2' />
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
                id={`${configuratorJson.gaName}-${configuratorJson.btnPrevious.toLowerCase()}`}
                className='btn btn-primary ml-1 ml-md-3'
                onClick={() => nextStep()}
              >
                {configuratorJson.btnNext}
              </div>
            ) : (
              <div
                id={`${configuratorJson.gaName}-${configuratorJson.btnNext.toLowerCase()}`}
                className='btn btn-primary ml-1 ml-md-3'
                onClick={() => RedirectHandeler()}
              >
                {configuratorJson.btnNext}
              </div>
            )}
          </div>
        </>)
        : <Spinner />}
    </>
  )
}

export default Details

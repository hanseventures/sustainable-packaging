import { navigate } from 'gatsby'
import _ from 'lodash'
import React, { useState } from 'react'
import { useWizard } from 'react-use-wizard'

// import loadIcon from './loadIcons'
import Spinner from './spinner'
import splitOnLast from './splitOnLast'

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
    isLastStep,
    handleStep
  } = useWizard()

  const RedirectHandeler = () => {
    setLoading(!loading);
    setTimeout(() => {
      navigate('/contact')
    }, 5000);
  };

  let selected = []

  props.selectedObjects.map(node => {
    selected.push(_.flatMap(_.entries(node)))
  })

  const title = (selectedID) => _.last(_.filter(props.objects, { node: { id: selectedID } })).node.title

  return (
    <>
      { !loading ?
        (<>
          <h1 className="h-2 text-xs-center">{configuratorJson.title}</h1>
          <div className='my-5 trimmed-3'>
            <p className='text-xs-center m-5'>Vielen Dank, dass sie in unseren Service für nachhaltige Verpackungen interessiert sind. Hier ist die Zusammenfassung Ihrer Auswahl.</p>
            <ul className='wizard-summary list-vertical'>
              {selected.map((nodes, i) => (
                <li
                  key={i}
                  className='d-flex flex-column align-item-center column-gap-2'
                >
                  <span className="font-weight-medium">{title(_.first(nodes))}:</span>
                  <ul className="list-none d-flex column-gap-1">
                    {_.last(nodes).map((node, idx) => (
                      <li
                        key={idx}
                        className='d-flex align-item-center column-gap-2 tag tag--info mt-2'
                      >
                        <img src={node.imagePath} />
                        {node.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

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

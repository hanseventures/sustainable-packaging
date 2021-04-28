import * as React from 'react';
import { useWizard } from 'react-use-wizard';

const Industry = () => {
  const {
    handleStep,
    nextStep,
    previousStep,
    isLoading,
    isFirstStep
  } = useWizard()

  // Attach an optional handler
  handleStep(() => {
    console.log('Industry')
  })

  return (
    <>
      <ul className='box'>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
        <li onClick={() => nextStep()}>
          <span>Industry</span>
        </li>
      </ul>

      <div className='d-flex flex-column justify-content-center align-self-center p-4 m-3  flex-lg-row'>
        <div
          className='btn btn-secondary mr-3'
          onClick={() => previousStep()}
        >
          Previous
        </div>
        <div className='btn btn-secondary ml-3' onClick={() => nextStep()}>
          Next
        </div>
      </div>
    </>
  )
}

export default Industry

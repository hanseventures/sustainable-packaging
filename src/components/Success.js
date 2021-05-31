import React from 'react';

const Success = props => {
  return (
    <section className="l-success container bg-secondary">

      <div className="content content--roomy d-grid">

        <div className='trimmed-2 text-xs-center'>
          <h3 className='font-wht mt-0'>
            Unser Erfolg in Zahlen
          </h3>
          <span className='mb-2 font-wht'>
            Wir haben uns auf die Beratung und Umsetzung von nachhaltiger Verpackung spezialisiert und damit viele treue Kunden gewinnen können.
          </span>
        </div>

        <div className="d-flex flex-column flex-md-row row-gap-3 column-gap-3 trimmed-3 mt-5 text-xs-center">

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg viewBox="0 0 79 79" height="79" width="79" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(3.2916666666666665,0,0,3.2916666666666665,0,0)"><path d="M0.75 23.25L23.25 23.25" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M6,17.25H3a.75.75,0,0,0-.75.75v5.25h4.5V18A.75.75,0,0,0,6,17.25Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M13.5,12.75h-3a.75.75,0,0,0-.75.75v9.75h4.5V13.5A.75.75,0,0,0,13.5,12.75Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M21,9.75H18a.75.75,0,0,0-.75.75V23.25h4.5V10.5A.75.75,0,0,0,21,9.75Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M4.182 9.241L20.25 1.944" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M19.056 5.126L20.25 1.944 17.068 0.75" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path></g></svg>

            <strong className='font-xl mt-3'>
              > 1.800
            </strong>
            <small className='mt-2'>
              Nachhaltige Verpackungen
            </small>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg viewBox="0 0 79 79" height="79" width="79" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(3.2916666666666665,0,0,3.2916666666666665,0,0)"><path d="M18.825,12.374l1.251,2.252h2.481a.68.68,0,0,1,.489,1.163l-2.278,2.486,1.262,2.9a.688.688,0,0,1-.979.86L18,20.318l-3.05,1.716a.688.688,0,0,1-.98-.86l1.22-2.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M5.175,12.374,3.924,14.626H1.443a.68.68,0,0,0-.489,1.163l2.278,2.486-1.262,2.9a.688.688,0,0,0,.979.86L6,20.318l3.05,1.716a.688.688,0,0,0,.98-.86l-1.22-2.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M12.368,2.141l1.989,3.977,3.827.383a.485.485,0,0,1,.294.825l-3.152,3.152,1.168,4.283a.484.484,0,0,1-.684.56l-3.875-1.937L8.06,15.321a.484.484,0,0,1-.683-.56l1.168-4.283L5.393,7.326A.485.485,0,0,1,5.687,6.5l3.826-.383L11.5,2.141A.484.484,0,0,1,12.368,2.141Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path></g></svg>

            <strong className='font-xl mt-3'>
              4,7 von 5
            </strong>
            <small className='mt-2'>
              Bewertungen unserer Kunden
            </small>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg viewBox="0 0 79 79" height="79" width="79" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(3.2916666666666665,0,0,3.2916666666666665,0,0)"><path d="M0.750 12.000 A11.250 11.250 0 1 0 23.250 12.000 A11.250 11.250 0 1 0 0.750 12.000 Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M7.5,16.4a3.576,3.576,0,0,1,.909.13l2.12.588a3.581,3.581,0,0,0,.961.131h2.849a3.464,3.464,0,0,0,3.483-3.062L18,11.3a2.561,2.561,0,0,0-1.985-2.6l-.849-.181a.854.854,0,0,1-.663-.824V5.772a1.313,1.313,0,0,0-2.625,0v.88A4.314,4.314,0,0,1,7.5,10.9Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M5.8 9.75L7.5 9.75 7.5 17.25 5.8 17.25" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path></g></svg>

            <strong className='font-xl mt-3'>
              4 Jahre
            </strong>
            <small className='mt-2'>
              Erfolgreich am Markt
            </small>
          </article>

        </div>

      </div>

    </section>

  )
}
export default Success

import React from 'react';

const Success = props => {
  return (
    <section className="l-success container bg-secondary">

      <div className="content content--roomy d-grid">

        <div className='trimmed-2 text-xs-center'>
          <h3 className='font-wht mt-0'>
            Unser Erfolg in Zahlen
          </h3>
          <span className='mb-2 d-none'>
            Die Preise orientieren sich immer nach Produkt und Eigenschaften.
            <br />
            Anbei einige Beispiele beliebter Anfragen.
          </span>
        </div>

        <div className="d-flex row-gap-3 column-gap-3 trimmed-3 mt-5 text-xs-center">

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke-width=".83333" d="M19.012 9.394a.897.897 0 010 1.212l-.791.838a1.73 1.73 0 00-.38 1.417l.267 1.121a.894.894 0 01-.608 1.049l-1.106.333a1.723 1.723 0 00-1.036 1.036l-.327 1.1a.895.895 0 01-1.05.606l-1.12-.266a1.73 1.73 0 00-1.417.38l-.838.79a.897.897 0 01-1.212 0l-.838-.792a1.73 1.73 0 00-1.417-.379l-1.121.267a.894.894 0 01-1.049-.606l-.333-1.106A1.726 1.726 0 003.6 15.357l-1.1-.326a.896.896 0 01-.606-1.05l.266-1.12a1.73 1.73 0 00-.38-1.417l-.79-.838a.897.897 0 010-1.212l.79-.838a1.73 1.73 0 00.38-1.417l-.267-1.122A.894.894 0 012.5 4.97l1.106-.333A1.723 1.723 0 004.64 3.603L4.969 2.5a.895.895 0 011.05-.606l1.12.266a1.73 1.73 0 001.417-.38l.838-.79a.897.897 0 011.212 0l.838.792a1.73 1.73 0 001.417.379l1.121-.267a.894.894 0 011.049.606l.333 1.106A1.726 1.726 0 0016.4 4.642l1.1.327a.896.896 0 01.606 1.05l-.264 1.12a1.73 1.73 0 00.379 1.417z"/>
                <path stroke-width=".83333" d="M7.848 12.693c2.729 1.386 2.596 1.116 4.933 1.116.978 0 1.471-.637 1.759-1.572v-.006l.75-2.334v-.004a.743.743 0 00-.712-.96h-1.82A.744.744 0 0112.04 8l.287-1.285a.637.637 0 00-1.137-.528L9.371 8.52a.743.743 0 01-.608.315h-.916"/>
                <path stroke-width=".83333" d="M5.765 8h1.25a.833.833 0 01.833.833V13a.833.833 0 01-.833.833h-1.25"/>
              </g>
            </svg>

            <strong className='font-xl mt-3'>
              2.000
            </strong>
            <small className='mt-2'>
              zufriedene Kunden
            </small>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke-width=".83333" d="M19.012 9.394a.897.897 0 010 1.212l-.791.838a1.73 1.73 0 00-.38 1.417l.267 1.121a.894.894 0 01-.608 1.049l-1.106.333a1.723 1.723 0 00-1.036 1.036l-.327 1.1a.895.895 0 01-1.05.606l-1.12-.266a1.73 1.73 0 00-1.417.38l-.838.79a.897.897 0 01-1.212 0l-.838-.792a1.73 1.73 0 00-1.417-.379l-1.121.267a.894.894 0 01-1.049-.606l-.333-1.106A1.726 1.726 0 003.6 15.357l-1.1-.326a.896.896 0 01-.606-1.05l.266-1.12a1.73 1.73 0 00-.38-1.417l-.79-.838a.897.897 0 010-1.212l.79-.838a1.73 1.73 0 00.38-1.417l-.267-1.122A.894.894 0 012.5 4.97l1.106-.333A1.723 1.723 0 004.64 3.603L4.969 2.5a.895.895 0 011.05-.606l1.12.266a1.73 1.73 0 001.417-.38l.838-.79a.897.897 0 011.212 0l.838.792a1.73 1.73 0 001.417.379l1.121-.267a.894.894 0 011.049.606l.333 1.106A1.726 1.726 0 0016.4 4.642l1.1.327a.896.896 0 01.606 1.05l-.264 1.12a1.73 1.73 0 00.379 1.417z"/>
                <path stroke-width=".83333" d="M7.848 12.693c2.729 1.386 2.596 1.116 4.933 1.116.978 0 1.471-.637 1.759-1.572v-.006l.75-2.334v-.004a.743.743 0 00-.712-.96h-1.82A.744.744 0 0112.04 8l.287-1.285a.637.637 0 00-1.137-.528L9.371 8.52a.743.743 0 01-.608.315h-.916"/>
                <path stroke-width=".83333" d="M5.765 8h1.25a.833.833 0 01.833.833V13a.833.833 0 01-.833.833h-1.25"/>
              </g>
            </svg>

            <strong className='font-xl mt-3'>
              4,6 von 5
            </strong>
            <small className='mt-2'>
              Bewertungen unserer Kunden
            </small>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke-width=".83333" d="M19.012 9.394a.897.897 0 010 1.212l-.791.838a1.73 1.73 0 00-.38 1.417l.267 1.121a.894.894 0 01-.608 1.049l-1.106.333a1.723 1.723 0 00-1.036 1.036l-.327 1.1a.895.895 0 01-1.05.606l-1.12-.266a1.73 1.73 0 00-1.417.38l-.838.79a.897.897 0 01-1.212 0l-.838-.792a1.73 1.73 0 00-1.417-.379l-1.121.267a.894.894 0 01-1.049-.606l-.333-1.106A1.726 1.726 0 003.6 15.357l-1.1-.326a.896.896 0 01-.606-1.05l.266-1.12a1.73 1.73 0 00-.38-1.417l-.79-.838a.897.897 0 010-1.212l.79-.838a1.73 1.73 0 00.38-1.417l-.267-1.122A.894.894 0 012.5 4.97l1.106-.333A1.723 1.723 0 004.64 3.603L4.969 2.5a.895.895 0 011.05-.606l1.12.266a1.73 1.73 0 001.417-.38l.838-.79a.897.897 0 011.212 0l.838.792a1.73 1.73 0 001.417.379l1.121-.267a.894.894 0 011.049.606l.333 1.106A1.726 1.726 0 0016.4 4.642l1.1.327a.896.896 0 01.606 1.05l-.264 1.12a1.73 1.73 0 00.379 1.417z"/>
                <path stroke-width=".83333" d="M7.848 12.693c2.729 1.386 2.596 1.116 4.933 1.116.978 0 1.471-.637 1.759-1.572v-.006l.75-2.334v-.004a.743.743 0 00-.712-.96h-1.82A.744.744 0 0112.04 8l.287-1.285a.637.637 0 00-1.137-.528L9.371 8.52a.743.743 0 01-.608.315h-.916"/>
                <path stroke-width=".83333" d="M5.765 8h1.25a.833.833 0 01.833.833V13a.833.833 0 01-.833.833h-1.25"/>
              </g>
            </svg>

            <strong className='font-xl mt-3'>
              2 Jahre
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

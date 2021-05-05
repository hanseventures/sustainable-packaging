import React from 'react';

const PricesAndPlans = props => {
  return (
    <section className="l-prices-and-plans container bg-primary">

      <div className="content content--roomy d-grid">

        <div className='trimmed-2 text-xs-center'>
          <h3 className='mt-0'>
            Preisbeispiele
          </h3>
          <span className='mb-2'>
            Die Preise orientieren sich immer nach Produkt und Eigenschaften.
            <br />
            Anbei einige Beispiele beliebter Anfragen.
          </span>
        </div>

        <div className="d-flex row-gap-3 column-gap-3 trimmed-3 mt-5 text-xs-center">

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke-width=".83333" d="M15.667.766a.833.833 0 00-.68-.35H5.014a.833.833 0 00-.68.35L.572 6.033a.833.833 0 00-.155.484V18.75a.833.833 0 00.833.833h17.5a.833.833 0 00.833-.833V6.517a.833.833 0 00-.155-.485zM10 .417V6.25"/>
                <path stroke-width=".83333" d="M10.418 14.583h6.666v2.5h-6.667zM.46 6.25h19.08"/>
              </g>
            </svg>

              <h5 className="my-3">Transporttrays</h5>
              <ul className="list-vertical font-xs mb-3">
                <li>Wasserdicht</li>
                <li>Bambus</li>
                <li>60.000 Stk.</li>
                <li>in 4 Wochen</li>
                <li><strong>2,40 € / Stk.</strong></li>
              </ul>

            <a
              className="btn btn-primary mt-2"
              href="#"
              title="Button Title"
            >
              Weiter
            </a>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke-width=".83333" d="M15.667.766a.833.833 0 00-.68-.35H5.014a.833.833 0 00-.68.35L.572 6.033a.833.833 0 00-.155.484V18.75a.833.833 0 00.833.833h17.5a.833.833 0 00.833-.833V6.517a.833.833 0 00-.155-.485zM10 .417V6.25"/>
                <path stroke-width=".83333" d="M10.418 14.583h6.666v2.5h-6.667zM.46 6.25h19.08"/>
              </g>
            </svg>

              <h5 className="my-3">Transporttrays</h5>
              <ul className="list-vertical font-xs mb-3">
                <li>Wasserdicht</li>
                <li>Bambus</li>
                <li>60.000 Stk.</li>
                <li>in 4 Wochen</li>
                <li><strong>2,40 € / Stk.</strong></li>
              </ul>

            <a
              className="btn btn-primary mt-2"
              href="#"
              title="Button Title"
            >
              Weiter
            </a>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke-width=".83333" d="M15.667.766a.833.833 0 00-.68-.35H5.014a.833.833 0 00-.68.35L.572 6.033a.833.833 0 00-.155.484V18.75a.833.833 0 00.833.833h17.5a.833.833 0 00.833-.833V6.517a.833.833 0 00-.155-.485zM10 .417V6.25"/>
                <path stroke-width=".83333" d="M10.418 14.583h6.666v2.5h-6.667zM.46 6.25h19.08"/>
              </g>
            </svg>

              <h5 className="my-3">Transporttrays</h5>
              <ul className="list-vertical font-xs mb-3">
                <li>Wasserdicht</li>
                <li>Bambus</li>
                <li>60.000 Stk.</li>
                <li>in 4 Wochen</li>
                <li><strong>2,40 € / Stk.</strong></li>
              </ul>

            <a
              className="btn btn-primary mt-2"
              href="#"
              title="Button Title"
            >
              Weiter
            </a>
          </article>

        </div>

      </div>

    </section>

  )
}
export default PricesAndPlans

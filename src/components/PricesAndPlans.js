import { navigate } from 'gatsby';
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

        <div className="d-flex flex-column flex-md-row row-gap-3 column-gap-3 trimmed-3 mt-5 text-xs-center">

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg viewBox="0 0 46 46" height="46" width="46" xmlns="http://www.w3.org/2000/svg">,,,,<g transform="matrix(1.9166666666666667,0,0,1.9166666666666667,0,0)"><path d="M8.993,23.25H2.451A1.5,1.5,0,0,1,.964,21.556L2.822,7.306A1.5,1.5,0,0,1,4.31,6H5.426A1.5,1.5,0,0,1,6.913,7.306Z" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M14.243,6h5.433a1.5,1.5,0,0,1,1.487,1.306l1.859,14.25a1.5,1.5,0,0,1-1.488,1.694H8.993" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M5.426 6L11.993 6" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M17.993,10.5V3.75a3,3,0,1,0-6,0V10.5" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9.578,1.253a3,3,0,0,0-1.335,2.5V6" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></g></svg>

            <h5 className="my-3">Beutel</h5>

            <ul className="list-vertical font-xs mb-3">
              <li>Wasserfest</li>
              <li>Mais</li>
              <li>60.000 Stk.</li>
              <li>in 4 Wochen</li>
              <li><strong>2,40 € / Stk.</strong></li>
            </ul>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg viewBox="0 0 46 46" height="46" width="46" xmlns="http://www.w3.org/2000/svg">,,,,<g transform="matrix(1.9166666666666667,0,0,1.9166666666666667,0,0)"><path d="M12 0.75L0.75 5.25 12 9.75 23.25 5.25 12 0.75z" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M0.75 5.25L0.75 18.75 12 23.25 12 9.75 0.75 5.25z" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M23.25 5.25L23.25 18.75 12 23.25 12 9.75 23.25 5.25z" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M18.187 7.275L6.937 2.775" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M20.625 16.5L18.75 17.25" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></g></svg>

            <h5 className="my-3">Kartonagen</h5>

            <ul className="list-vertical font-xs mb-3">
              <li>Hitzebeständig</li>
              <li>Holzfasern</li>
              <li>25.000 Stk.</li>
              <li>in 3 Monaten</li>
              <li><strong>1,09 € / Stk.</strong></li>
            </ul>
          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <svg viewBox="0 0 46 46" height="46" width="46" xmlns="http://www.w3.org/2000/svg">,<g transform="matrix(1.9166666666666667,0,0,1.9166666666666667,0,0)"><path d="M14.441,4.97a1.5,1.5,0,0,1-.191-.732V1.5A.75.75,0,0,0,13.5.75h-3a.75.75,0,0,0-.75.75V4.238a1.5,1.5,0,0,1-.191.732L7.95,7.847A7.785,7.785,0,0,0,6.75,12h0v9.333a1.481,1.481,0,0,0,1.132,1.455,18.584,18.584,0,0,0,8.236,0,1.481,1.481,0,0,0,1.132-1.455V12h0a7.785,7.785,0,0,0-1.2-4.153Z" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9.75 3.75L14.25 3.75" fill="none" stroke="#95B743" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></g></svg>

            <h5 className="my-3">Flaschen</h5>

            <ul className="list-vertical font-xs mb-3">
              <li>Isolierend</li>
              <li>Bambus</li>
              <li>10.000 Stk.</li>
              <li>ab Sofort</li>
              <li><strong>0,98 € / Stk.</strong></li>
            </ul>
          </article>

        </div>

      </div>

    </section>

  )
}
export default PricesAndPlans

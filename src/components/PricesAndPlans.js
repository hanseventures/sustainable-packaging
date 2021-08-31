import { navigate } from 'gatsby';
import React from 'react';

const PricesAndPlans = props => {
  return (
    <section className="l-prices-and-plans container bg-primary">

      <div className="content content--roomy d-grid">

        <div className='trimmed-2 text-xs-center'>
          <h3 className='mt-0'>
            Beispiele und Preise
          </h3>
          <span className='mb-2'>
            Nachhaltige Verpackungsalternativen gibt es mittlerweile zu kompetitiven Preisen.
            <br />
            Beispiele beliebter Anfragen.
          </span>
        </div>

        <div className="d-flex flex-column flex-md-row row-gap-3 column-gap-3 trimmed-5 mt-5 text-xs-center">

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <img
              src="images/2/grencoreimage3.jpg"
              className="my-3 img--radius-xl"
              alt=""
            />

            <h5 className="my-3">
              Versandkartons<br />mit 30% Grasanteil
            </h5>

            <ul className="list-vertical bullets text-xs-left font-xs mb-3">
              <li>Geringer Wasser- und Energieverbrauch</li>
              <li>Deutlich weniger Einsatz von Chemie</li>
              <li>Von regional ungenutzten Ausgleichsflächen</li>
              <li>Reduzierung von Treibhausgasen</li>
              <li>Lebensmittelfreundliche Verpackung</li>
              <li>Keine Allergiegefahr</li>
              <li>Vollständiges Recycling</li>
            </ul>

            <small><strong>ab 1,40 € pro Verpackung<br />ab 10.000 Stk.</strong></small>

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

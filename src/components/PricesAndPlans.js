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

        <div className="d-flex flex-column flex-md-row emulated-flex-gap trimmed-5 mt-5 text-xs-center">

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

            <small><strong>
            ab 1.000 Stk. XX € pro Verpackung <br /><br />
            ab 10.000 Stk 1,40 € pro Verpackung<br /><br />
            ab 50.000 Stk. XX € pro Verpackung <br />

            </strong></small>

          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <img
              src="images/2/erdbeer-schale.jpg"
              className="my-3 img--radius-xl"
              alt=""
            />

            <h5 className="my-3">500g Erdbeerschale</h5>

            <ul className="list-vertical bullets text-xs-left font-xs mb-3">
              <li>Die Plastik-Erdbeer-Schale wird abgelöst</li>
              <li>Besonder Nachhaltigkeit, da Naturprodukte in eine "Natur"-Verpackung kommen (mit Recycling-Kreislauf)</li>
              <li>Die Kosten im 2-3-fachen gegenüber der Plastikschale</li>
              <li>Produkte sind individuell mit lebensmittelkonformen Farben bedruckbar</li>
            </ul>
            <small>

            <strong>
              ab  10.000 Stk. 0,06 € pro Verpackung<br/ ><br/ >
              ab  50.000 Stk. 0,05 € pro Verpackung<br/ ><br/ >
              ab  500.000 Stk. 0,04 € pro Verpackung<br/ >
            </strong></small>

          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <img
              src="images/2/blumen-tray.jpg"
              className="my-3 img--radius-xl"
              alt=""
            />
            <h5 className="my-3">Blumentray aus Vollkarton</h5>

            <ul className="list-vertical bullets text-xs-left font-xs mb-3">
              <li>Das Plastik Blumentray wird abgelöst</li>
              <li>Besondere Nachhaltigkeit, da Naturprodukte in eine „Natur“-Verpackung kommen(mit Recycling-Kreislauf</li>
              <li>Problem: Ein Großteil der entsorgten Trays aus Plastik gelangt überhaupt nicht ins Recycling. Verbleibende Trays werden verbannt. Ursache ist unter anderem die nicht Erkennung des schwarzen Plastiks in den Recyclinganlagen</li>
              <li>Produkte sind auch bedruckbar</li>
            </ul>
            <small>
            4er Steige: <br/ ><strong> ab 75.000 Stk., 260 € pro 100 Stk.</strong> <br/ ><br />
            5er Steige: <br/ > <strong>ab 40.000 Stk., 260 € pro 100 Stk.</strong> <br/ ><br />
            6er Steige: <br/ ><strong> ab 60.000 Stk., 250 € pro 100 Stk. <br/ >
            </strong></small>

          </article>

        </div>

      </div>

    </section>

  )
}
export default PricesAndPlans

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
            <small><strong>ab 0,04 € pro Verpackung <br/ > ab 10.000 Stück</strong></small>

          </article>

          <article className="card card--default d-flex flex-basis-full flex-align-center flex-column py-5 px-3">
            <img
              src="images/2/irgendeine-verpackung.jpg"
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
            <small><strong>ab 260 €  pro 100stk. <br/ > ab 40.000 Stück</strong></small>

          </article>

        </div>

      </div>

    </section>

  )
}
export default PricesAndPlans

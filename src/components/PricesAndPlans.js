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
          </span>
        </div>

        <h6 className='mt-4 mb-1 text-xs-center'>Beispiele beliebter Anfragen</h6>

        <div className="d-flex flex-column flex-md-row emulated-flex-gap trimmed-5 mt-3 text-xs-center">

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
              <li>Gras von ungenutzten, regionalen Flächen</li>
              <li>Reduzierung von Treibhausgasen</li>
              <li>Lebensmittelfreundliche Verpackung</li>
              <li>Keine Allergiegefahr</li>
              <li>Ideal z.B. für nachhaltigen E-Commerce</li>
            </ul>

            <small><strong>
            ab 1.000 Stk. 0,57 € pro Verpackung <br /><br />
            ab 10.000 Stk 0,49 € pro Verpackung<br /><br />
            ab 100.000 Stk. 0,43 € pro Verpackung <br />

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
              <li>Besonders passender Nachhaltigkeitsansatz, da Naturprodukte in einer „Natur“-Verpackung angeboten werden können</li>
              <li>Marketingeffekte und Konsumentenfeedback rechtfertigen die gegenüber Plastik höheren Preise</li>
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
              <li>Problem: Ein Großteil der entsorgten Trays aus Plastik gelangt überhaupt nicht ins Recycling. Verbleibende Trays werden verbannt. Ursache ist unter anderem, dass die Standard-Trays aus schwarzem Plastik in den Recyclinganlagen aus technischen Gründen oft nicht korrekt maschinell erkannt werden können</li>
              <li>Lösung: Ein Blumentray aus Vollkarton – nachhaltig, plastikfrei und die passende „Natur-Verpackung“ für ein Natur-Produkt.</li>
              <li>Individuell bedruckbar</li>
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

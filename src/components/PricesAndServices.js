import React from "react"

const CTA = props => {
  return (
      <section className='l-prices-and-services content content--roomy d-flex-md'>
        <div className='prices width-md-50'>
          <h2>Unsere Preise</h2>
          <p>Let's keep it simple.</p>

          <table className='text-xs-left width-100 mt-4'>
            <tbody>
              <tr>
                <th>Einzelarbeitsplatz</th>
                <td>150 € / Monat</td>
              </tr>
              <tr>
                <th>Fester Arbeitsplatz</th>
                <td>250 € / Monat</td>
              </tr>
              <tr>
                <th>Einzelbüro</th>
                <td>500 € / Monat</td>
              </tr>
              <tr>
                <th>Doppelbüro</th>
                <td>800 € / Monat</td>
              </tr>
              <tr>
                <th>Teams</th>
                <td>auf Anfrage</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='icons width-md-50 mt-5 mt-md-0'>
          <h2>Diese Services sind inklusive</h2>
          <div className='icon-wrapper d-flex flex-wrap flex-row'>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\wifi.svg'
              />
              <span>Wifi</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\coffee.svg'
              />
              <span>Kaffeevollautomat</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\water.svg'
              />
              <span>Wasserspender</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\fridge.svg'
              />
              <span>Kühlschrank</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\microwave.svg'
              />
              <span>Mikrowelle</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\cleaning.svg'
              />
              <span>Reinigung</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt=""
                className=''
                src='images\icons\keys.svg'
              />
              <span>Schlüssel für die Immobilie</span>
            </div>
          </div>
        </div>
      </section>
  )
}
export default CTA

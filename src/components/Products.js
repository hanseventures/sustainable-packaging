import React from "react"

const Products = props => {
  return (
    <section className='l-products content content--roomy d-flex-md flex-md-column'>

      <div className='text-xs-center trimmed-width-3 d-flex flex-column align-self-center'>
        <h2>So lässt es sich gut arbeiten!</h2>
        <p>
          Bei uns soll es nicht nur gute Atmosphäre geben, sondern du sollst
          auch gesund sitzen. Wir verwenden hochwertige Büromöbel z. B. von Lendis.
        </p>
      </div>

      <div className='chair d-flex-md flex-align-center column-gap-3 flex-md-row-reverse mt-5'>
        <img
          alt="Product Image Description"
          className='chair-image min-width-0'
          src='/images/drehstuhl-alex.jpeg'
        />
        <div className='chair-text'>
          <h3>Unsere Stühle</h3>
          <p>
            Alle Arbeitsplätze werden mit ergonomischen, flexiblen,
            adjustierbaren Stühlen besetzt. Natürlich ist der Stuhl auch frei
            von Schadstoffen.
          </p>
        </div>
      </div>

      <div className='table d-flex-md flex-align-center column-gap-3 mt-5'>
        <img
          alt="Product Image Description"
          className='table-image min-width-0 d-none_'
          src='/images/schreibtisch-leo.jpeg'
        />
        <div className='table-text'>
          <h3>Unsere Tische</h3>
          <p>
            Hochwertige Tische mit schwarzer Tischplatte aus HPL Fenix
            Beschichtung und einem hochwertigem Gestell aus Echtholz-Esche.
            Hier wackelt nichts und es gibt ausreichend Platz zu arbeiten.
            <strong className="d-block mt-4">H: 74 cm - B: 160 cm - T: 80 cm</strong>
          </p>
        </div>
      </div>

      <div className='phonebox d-flex-md flex-align-center column-gap-3 flex-md-row-reverse mt-5'>
        <img
          alt="Product Image Description"
          className='phonebox-image min-width-0 d-none_'
          src='/images/1/telefonbox-lilly.jpeg'
        />
        <div className='phonebox-text'>
          <h3>Meeting? Kein Problem!</h3>
          <p>
            Unsere Telefon- und Meetingboxen aus Echtholz haben eine
            Schallreduktion von 35 dB. So kannst du ganz ungstört an Meetings
            teilnehmen.
            <strong className="d-block mt-4">H: 225 cm - B: 100 cm - T: 100 cm</strong>
          </p>
        </div>
      </div>

    </section>
  )
}
export default Products

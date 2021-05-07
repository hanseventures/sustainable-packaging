import React from "react"

const TextWithImage = props => {
  return (
    <section className="l-text-with-image text-image--left container bg-wht">

      <div className="content content--centered content--roomy trimmed-4">
        <div className="d-grid align-item-center column-gap-4 row-gap-3">

          <div className="group-description">
            <h2>So funktionierts</h2>
            <p>
            Wir sind ein Vermittler zwischen Business-Kunden und Produzenten von nachhaltigen Verpackungen.<br></br>
            Als neutraler Experte auf diesem Gebiet verhelfen wir Ihnen, in diesem wenig transparenten Markt, zur perfekten nachhaltigen Verpackung.<br></br>
            Mit Hilfe unseres Konfigurators können wir einfach und schnell auf Ihre Wünsche eingehen.<br></br>
            </p>
          </div>

          <div className="group-images">
            <img
              src="/images/2/der-bestellprozess.jpg"
              className="my-3"
              alt="Image Description"
            />
          </div>

        </div>
      </div>

    </section>
  )
}
export default TextWithImage

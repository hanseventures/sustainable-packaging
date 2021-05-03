import React from "react"

const TextWithImage = props => {
  return (
    <section className="l-text-image text-image--left container bg-wht">

      <div className="content content-centered content-roomy trimmed-width-4 d-grid column-gap-4 row-gap-3">

        <div className="group-description">
          <h2>Du bist Freelancer, Angestellter oder Teil eines Teams?</h2>
          <p>
            Du brauchst <strong>keinen festen Arbeitsplatz</strong> oder du willst lieber
            doch ein <strong>Einzelbüro</strong>, z. B. weil du viel telefonierst? Gib
            deinen Wunsch mit an, dass hilft uns bei der Planung.
            <br></br>
            <br></br>
            Für <strong>Unternehmen</strong> bieten wir auch die Möglichkeit komplette
            Räume zu buchen, um ganze Teams unterbringen zu können.
          </p>
        </div>

        <div className="group-images">
          <img
            src="/images/illustrations/suburban-illustration-01b.svg"
            className="my-3"
            alt="Image Description"
          />
        </div>

      </div>

    </section>
  )
}
export default TextWithImage

import React from "react"

const ContactSimple = props => {
  const shareUrl = typeof window !== `undefined` ? window.location.origin : ''

  return (
    <section id='contact-form' className="l-text-with-image l-contact-simple text-image--right container bg-wht">

      <div className="content content--centered content--roomy trimmed-4 pt-1">
        <div className="d-grid grid-inverted align-item-center column-gap-4 row-gap-3">

          <div className="group-description align-self-start">
            <h2 className='mt-0 h-2'>Beratung erwünscht?</h2>
            <p>
              Sie wollen lieber beraten werden und persönlich besprechen ob ihre Produktvorstellung von uns umsetzbar ist?<br></br>
              <br></br>
              Kein Problem, wir rufen Sie gerne zurück!
            </p>
          </div>

          <div className="group-images">
          <form
            action='https://docs.google.com/forms/d/e/1FAIpQLSc-OV1zn7ycfcu7JJaC6ZNVuDBF1qhaty7tdJFySsVRU_KGFA/formResponse'
            method='post'
            target='hidden_iframe'
            onSubmit='{handleSubmit}'
          >
          <div className='select form-group form-entry-01'>
            <select
              aria-label='Select menu example'
              id='anrede'
              name='entry.1403452405'
              defaultValue='Anrede'
            >
              <option value='Herr'>
                Herr
              </option>
              <option value='Frau'>Frau</option>
            </select>
          </div>

            <div className='form-group form-entry-02'>
              <label className='form-control' htmlFor='fname'>
                Name
              </label>
              <input
                type='text'
                id='fname'
                name='fname'
                name='entry.1805432203'
                required
              />
              <br></br>
            </div>

            <div className='form-group form-entry-03'>
              <label className='form-control' htmlFor='tel'>
                Telefon
              </label>
              <input
                required
                type='text'
                id='tel'
                name='tel'
                name='entry.1262603567'
              />
              <br></br>
            </div>

            <input
              id='submit'
              type='submit'
              value='Rückruf anfordern'
              className='btn btn-primary'
            ></input>
          </form>
          </div>

        </div>
      </div>

    </section>

  )
}
export default ContactSimple

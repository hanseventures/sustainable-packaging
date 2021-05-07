import React from "react"

const ContactSimple = props => {
  const shareUrl = typeof window !== `undefined` ? window.location.origin : ''

  return (
      <section id='contact-form' className='l-contact-with-image content content--roomy pt-2'>
        <div className="d-flex">
          <div className='form-wrapper bg-gry px-3 py-5'>
            <h2 className='mt-0 h-2'>Beratung erwünscht?</h2>
            <p>
              Sie wollen lieber beraten werden und persönlich besprechen ob ihre Produktvorstellung von uns umsetzbar ist?<br></br>
              Kein Problem, wir rufen Sie gerne zurück!
            </p>

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
                className='btn btn-secondary'
              ></input>
            </form>
          </div>
        </div>

      </section>
  )
}
export default ContactSimple

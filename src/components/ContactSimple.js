import React from 'react'

const ContactSimple = props => {

  const handleSubmit = (e) => {
    setTimeout(() => {
      e.target.innerHTML = "<div id='rückrufformular' class='alert alert--success text-xs-center'><h3 class='font-wht mb-1'>Vielen Dank!</h3><span class='font-weight-light'>Wir melden uns kurzfristig zurück.</span></div>"
    }, 200);
  };

  return (
    <section id='contact-form' className="l-text-with-image l-contact-simple text-image--right container bg-wht">

      <div className="content content--centered content--roomy trimmed-4">
        <div className="d-grid grid-inverted align-item-center column-gap-4 row-gap-3">

          <div className="group-description align-self-start">
            <h2 className='mt-0 h-2'>Beratung gewünscht?</h2>
            <p>
              Sie wollen lieber beraten werden und persönlich besprechen, ob ihre Produktvorstellung von uns umsetzbar ist?<br></br>
            </p>
            <p>
              Kein Problem, wir rufen Sie gerne zurück!
            </p>
          </div>

          <div className="group-images">

            <form
              action='https://docs.google.com/forms/d/e/1FAIpQLSccTnG1uRaGZ9KgEWUpf7B1gh2gNrqPiJgdMdDYBGSiuvBdFQ/formResponse'
              method='post'
              target='hidden_iframe'
              onSubmit={handleSubmit}
            >
              <div className='select form-group form-entry-01'>
                <select
                  aria-label='Select salutation'
                  id='anrede'
                  name='entry.447426616'
                  defaultValue='Anrede'
                >
                  <option value="-1">Anrede</option>
                  <option value='Herr'>Herr</option>
                  <option value='Frau'>Frau</option>
                </select>
              </div>

              <div className='form-group form-entry-02'>
                <input
                  className='form-control is-active'
                  type='text'
                  id='name'
                  name='name'
                  name='entry.238740927'
                  required
                />
                <label htmlFor='name'>Name</label>
              </div>

              <div className='form-group form-entry-03'>
                <input
                  className='form-control is-active'
                  type='text'
                  id='telephone'
                  name='telefon'
                  name='entry.261858826'
                  required
                />
                <label htmlFor='telephone'>Telefon</label>
              </div>

              <div className='d-none'>
                <input
                  type='hidden'
                  id='callBackForm'
                  name='callBackForm'
                  name='entry.484512639'
                  value="Rückruf Formular"
                />
              </div>

              <input
                id='submit'
                type='submit'
                value='Rückruf anfordern'
                className='btn btn-primary'
              />
            </form>

          </div>
        </div>
      </div>

    </section>

  )
}
export default ContactSimple

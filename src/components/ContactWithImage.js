import React from "react"

const ContactWithImage = props => {
  return (
      <section id='contact-form' className='l-contact-with-image content content--roomy pt-2'>
        <div className="d-flex">
          <div className='form-wrapper bg-gry px-3 py-5'>
            <h2 className='mt-0 h-2'>Haben wir Dein Interesse wecken können?</h2>
            <p>
              Melde dich hier unverbindlich an. <br></br>
              Wir melden uns bei Dir zurück sobald es los geht!
            </p>

            <form
              action='https://docs.google.com/forms/d/e/1FAIpQLSc-OV1zn7ycfcu7JJaC6ZNVuDBF1qhaty7tdJFySsVRU_KGFA/formResponse'
              method='post'
              target='hidden_iframe'
              onSubmit='{handleSubmit}'
            >
              <div className='form-group form-entry-01'>
                <label className='form-control' htmlFor='fname'>
                  Vorname
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

              <div className='form-group form-entry-02'>
                <label className='form-control' htmlFor='plz'>
                  PLZ
                </label>
                <input
                  required
                  type='text'
                  id='plz'
                  name='plz'
                  name='entry.1262603567'
                />
                <br></br>
              </div>

              <div className='form-group form-entry-03'>
                <label className='form-control' htmlFor='email'>
                  E-Mail
                </label>
                <input
                  required
                  type='email'
                  id='email'
                  name='emailAddress'
                />
                <br></br>
              </div>

              <div className='select form-group form-entry-04'>
                <select
                  aria-label='Select menu example'
                  id='arbeitsplatz'
                  name='entry.1403452405'
                  defaultValue='Flexibler Einzelplatz'
                >
                  <option value='Flexibler Einzelplatz'>
                    Flexibler Einzelplatz
                  </option>
                  <option value='Fester Einzelplatz'>Fester Einzelplatz</option>
                  <option value='Einzelbüro'>Einzelbüro</option>
                </select>
              </div>

              <div className='form-group form-entry-05 form-entry-full-width'>
                <span className='d-block mb-2'>Möchtest Du noch eine Location empfehlen?</span>
                <textarea
                  name='entry.505546823'
                  rows='5'
                  cols='10'
                  placeholder='Adresse, Gebäudenamen, Kontakt, etc.'
                ></textarea>
              </div>

              <input
                id='submit'
                type='submit'
                value='Anmeldung abschicken'
                className='btn btn-secondary'
              ></input>
            </form>
          </div>

          <div className='image-wrapper'>
            <img
              alt='{intro.frontmatter.first_section}'
              className='d-none d-md-block min-width-0'
              src='/images/suburban-coworking-contact.jpg'
            />
          </div>
        </div>

        <div className='l-social-icons'>
          <div className='social-wrapper bg-primary font-wht px-4 py-2'>
            <p>Empfehle uns gerne Deinen Freunden und Kollegen weiter!</p>
            <div className='social-icons d-flex'>
              {*
                <WhatsappShareButton
                url={shareUrl}
                title={site.title}
                separator=':: '
                className='mr-1'
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <TwitterShareButton
                url={shareUrl}
                title={site.title}
                className='mr-1'
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <FacebookShareButton url={shareUrl} quote={site.title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              *}
            </div>
          </div>
        </div>

      </section>
  )
}
export default ContactWithImage

import { graphql, navigate } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import HeroStatic from '../components/HeroStatic';
import TextWithImage from '../components/TextWithImage';
import USP from '../components/USP';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Onboarding from './onboarding';

const Home = props => {
  const intro = props.data.intro
  const site = props.data.site.siteMetadata
  const shareUrl = typeof window !== `undefined` ? window.location.origin : ''

  const handleSubmit = () => {
    navigate('/thankyou');
  };

  return (
    <Layout bodyClass='page-home'>
      <SEO title={site.title} />
      <Helmet>
        <meta
          name='description'
          content='Wir richten Co-Working Spaces für dich in deiner Region ein! Trage dich mit deiner PLZ jetzt ein...'
        />
      </Helmet>

      <HeroStatic />

      <TextWithImage />

      <USP />


      <Onboarding />

      <section id='intro' className='l-cta bg-primary d-flex flex-md-row-reverse font-wht mb-md-3 mx-md-3'>
        <div className='image-wrapper d-none d-md-block'>
          <img
            alt={intro.frontmatter.first_section}
            src='/images/suburban-coworking-cta.jpg'
          />
        </div>
        <div className='content content-wrapper'>
          <h2 className='mt-0 font-wht'>Unser Ziel</h2>
          <p>
            Wir wollen Co-Working Spaces dahin bringen, wo sie wirklich benötigt
            werden - und zwar in deine Nähe!
          </p>
          <p>
            <strong>Um dieses Ziel zu erreichen brauchen wir deine Hilfe.</strong>
          </p>
          <a href='#contact-form' className='btn btn-outline mt-3'>
            Direkt anmelden
          </a>
        </div>
      </section>

      <section className='l-first-section content content--roomy d-flex-md'>
        <img
          alt={intro.frontmatter.first_section}
          className='min-width-0 mr-md-3'
          src='/images/illustrations/suburban-illustration-01b.svg'
        />
        <div>
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
      </section>

      <section className='l-intermission font-wht pos-relative black-overlay'>
        <h3 className='h-2 pos-abs-center text-xs-center font-wht z-index-100 mx-5 mx-md-0'>
          Ein Ort der Ruhe, zum Arbeiten und Denken.
        </h3>
        <img
          alt={intro.frontmatter.first_section}
          className=''
          src='/images/suburban-coworking-intermission.jpg'
        />
      </section>

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
            alt={intro.frontmatter.first_section}
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
            alt={intro.frontmatter.first_section}
            className='table-image min-width-0 d-none_'
            src='/images/schreibtisch-leo.jpeg'
          />
          <div className='table-text'>
            <h3>Unsere Tische</h3>
            <p>
              Hochwertige Tische mit schwarzer Tischplatte aus HPL Fenix
              Beschichtung und einem hochwertigem Gestell aus Echtholz-Esche.
              Hier wackelt nichts und es gibt ausreichend Platz zu arbeiten.
              <strong className='d-block mt-4'>H: 74 cm - B: 160 cm - T: 80 cm</strong>
            </p>
          </div>
        </div>

        <div className='phonebox d-flex-md flex-align-center column-gap-3 flex-md-row-reverse mt-5'>
          <img
            alt={intro.frontmatter.first_section}
            className='phonebox-image min-width-0 d-none_'
            src='/images/telefonbox-lilly.jpeg'
          />
          <div className='phonebox-text'>
            <h3>Meeting? Kein Problem!</h3>
            <p>
              Unsere Telefon- und Meetingboxen aus Echtholz haben eine
              Schallreduktion von 35 dB. So kannst du ganz ungstört an Meetings
              teilnehmen.
              <strong className='d-block mt-4'>H: 225 cm - B: 100 cm - T: 100 cm</strong>
            </p>
          </div>
        </div>
      </section>

      <section className='l-locations content content--roomy d-flex-md flex-md-row-reverse'>
        <img
          alt={intro.frontmatter.first_section}
          className='min-width-0 mb-3'
          src='/images/illustrations/suburban-illustration-03.svg'
        />
        <div>
          <h2>Zu den Locations</h2>
          <p>
            Wir wollen nicht 100 Leute in einer Location haben. Deshalb sind wir
            auf der Suche nach <strong>kleinen leerstehenden Gewerbeflächen</strong>.
          </p>
          <p>
            Sobald eine Location gefunden wurde, wird diese von unseren
            Innenarchitekten ausgestattet.
          </p>
        </div>
      </section>

      <div className='content content--roomy d-flex-md'>
        <section className='l-prices width-md-50'>
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
        </section>

        <section className='l-icons width-md-50 mt-5 mt-md-0'>
          <h2>Diese Services sind inklusive</h2>
          <div className='icon-wrapper d-flex flex-wrap flex-row'>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\wifi.svg'
              />
              <span>Wifi</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\coffee.svg'
              />
              <span>Kaffeevollautomat</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\water.svg'
              />
              <span>Wasserspender</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\fridge.svg'
              />
              <span>Kühlschrank</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\microwave.svg'
              />
              <span>Mikrowelle</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\cleaning.svg'
              />
              <span>Reinigung</span>
            </div>
            <div className='icon-item d-flex flex-column align-item-center'>
              <img
                alt={intro.frontmatter.first_section}
                className=''
                src='images\icons\keys.svg'
              />
              <span>Schlüssel für die Immobilie</span>
            </div>
          </div>
        </section>
      </div>

      <section id='contact-form' className='l-contact content pt-2 d-flex-md mt-md-3_ mt-1_ mx-md-auto mb-0_ pb-0'>
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
            onSubmit={handleSubmit}
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
            alt={intro.frontmatter.first_section}
            className='d-none d-md-block min-width-0 '
            src='/images/suburban-coworking-contact.jpg'
          />
        </div>
      </section>

      <section className='l-social-icons content content--roomy pt-0'>
        <div className='social-wrapper bg-primary font-wht px-4 py-2'>
          <p>Empfehle uns gerne Deinen Freunden und Kollegen weiter!</p>
          <div className='social-icons d-flex'>
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
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    intro: markdownRemark(fileAbsolutePath: { regex: "/content/home.md/" }) {
      html
      frontmatter {
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home

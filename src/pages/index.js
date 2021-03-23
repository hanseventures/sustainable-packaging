import { graphql } from 'gatsby';
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

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Onboarding from './onboarding';

const Home = props => {
  const intro = props.data.intro
  const site = props.data.site.siteMetadata
  const shareUrl = typeof window !== `undefined` ? window.location.origin : ''

  return (
    <Layout bodyClass="page-home container">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <Onboarding />
      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            {intro.frontmatter.intro_image && (
              <div className="position-relative">
                <img
                  alt={intro.frontmatter.title}
                  className={"introImageClasses"}
                  src={intro.frontmatter.intro_image}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="l-cta content d-flex-md flex-md-row-reverse font-wht m-md-3 mt-1 mx-md-auto">
        <div className="image-wrapper">
          <img
            alt={intro.frontmatter.first_section}
            className="d-none d-md-block min-width-0 "
            src="/images/suburban-coworking-cta.jpg"
          />
        </div>
        <div className="content-wrapper bg-primary p-4">
          <h2 className="mt-0 font-wht">Unser Ziel</h2>
          <p>
            Wir wollen Co-Working Spaces dahin bringen, wo sie wirklich benötigt
            werden - und zwar in deine Nähe!
            <br></br>
            <br></br>
            <b>Um dieses Ziel zu erreichen brauchen wir deine Hilfe.</b>
          </p>
          <button className="btn btn-outline">
            <a href="#">Direkt anmelden</a>
          </button>
        </div>
      </section>

      <section className="l-first-section content d-flex-md">
        <img
          alt={intro.frontmatter.first_section}
          className="min-width-0 "
          src={intro.frontmatter.intro_image}
        />
        <div>
          <h2>Du bist Freelancer, Angestellter oder Teil eines Teams?</h2>
          <p>
            Du brauchst <b>keinen festen Arbeitsplatz</b> oder du willst lieber
            doch ein <b>Einzelbüro</b>, z. B. weil du viel telefonierst?Gib
            deinen Wunsch mit an, dass hilft uns bei der Planung.
            <br></br>
            <br></br>
            Für <b>Unternehmen</b> bieten wir auch die Möglichkeit komplette
            Räume zu buchen, um ganze Teams unterbringen zu können.
          </p>
        </div>
      </section>

      <section className="l-intermission font-wht position-relative black-overlay">
        <h3 className="h-2 pos-abs-center text-xs-center font-wht z-index-100">
          Ein Ort der Ruhe, zum Arbeiten und Denken.
        </h3>
        <img
          alt={intro.frontmatter.first_section}
          className=""
          src="/images/suburban-coworking-intermission.jpg"
        />
      </section>

      <section className="l-products content d-flex-md flex-md-column">
        <h2>So lässt es sich gut arbeiten!</h2>
        <p>
          Bei uns soll es nicht nur gute Atmosphäre geben, sondern du sollst
          auch gesund sitzen.
        </p>

        <div className="d-flex-md flex-md-row-reverse mb-5">
          <img
            alt={intro.frontmatter.first_section}
            className="chair-image min-width-0"
            src={intro.frontmatter.intro_image}
          />
          <div className="chair-text">
            <h3>Unsere Stühle</h3>
            <p>
              Alle Arbeitsplätze werden mit ergonomischen, flexiblen,
              adjustierbaren Stühlen besetzt. Natürlich ist der Stuhl auch frei
              von Schadstoffen.
            </p>
          </div>
        </div>

        <div className="d-flex-md mb-5">
          <img
            alt={intro.frontmatter.first_section}
            className="table-image min-width-0"
            src={intro.frontmatter.intro_image}
          />
          <div className="table-text">
            <h3>Unsere Tische</h3>
            <p>
              Hochwertige Tische mit schwarzer Tischplatte aus HPL Fenix
              Beschichtung und einem hochwertigem Gestell aus Echtholz-Esche.
              Hier wackelt nichts und es gibt ausreichend Platz zu arbeiten.
              <br></br>
              <br></br>
              <b>H: 74 cm - B: 160 cm - T: 80 cm</b>
            </p>
          </div>
        </div>

        <div className="d-flex-md flex-md-row-reverse mb-5">
          <img
            alt={intro.frontmatter.first_section}
            className="phonebox-image min-width-0"
            src={intro.frontmatter.intro_image}
          />
          <div className="phonebox-text">
            <h3>Meeting? Kein Problem!</h3>
            <p>
              Unsere Telefon- und Meetingboxen aus Echtholz haben eine
              Schallreduktion von 35 dB. So kannst du ganz ungstört an Meetings
              teilnehmen.
              <br></br>
              <br></br>
              <b>H: 225 cm - B: 100 cm - T: 100 cm</b>
            </p>
          </div>
        </div>
      </section>

      <section className="l-locations content d-flex-md flex-md-row-reverse">
        <img
          alt={intro.frontmatter.first_section}
          className="min-width-0"
          src={intro.frontmatter.intro_image}
        />
        <div>
          <h2>Zu den Locations</h2>
          <p>
            Wir wollen nicht 100 Leute in einer Location haben. Deshalb sind wir
            auf der Suche nach <b>kleinen leerstehenden Gewerbeflächen</b>.
            <br></br>
            <br></br>
            Sobald eine Location gefunden wurde, wird diese von unseren
            Innenarchitekten ausgestattet.
          </p>
        </div>
      </section>

      <div className="content d-flex-md">
        <section className="l-prices width-md-50 mb-5 mb-md-0">
          <h2>Unsere Preise</h2>
          <p>Let's keep it simple.</p>
          <table className="text-xs-left width-100">
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
          </table>
        </section>

        <section className="l-icons width-md-50 mt-5 mt-md-0">
          <h2>Diese Services sind inklusive</h2>
          <div className="icon-wrapper d-flex flex-wrap flex-row flex-justify-center">
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\wifi.svg"
              />
              <span>Wifi</span>
            </div>
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\coffee.svg"
              />
              <span>Kaffeevollautomat</span>
            </div>
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\water.svg"
              />
              <span>Wasserspender</span>
            </div>
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\fridge.svg"
              />
              <span>Kühlschrank</span>
            </div>
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\microwave.svg"
              />
              <span>Mikrowelle</span>
            </div>
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\cleaning.svg"
              />
              <span>Reinigung</span>
            </div>
            <div className="icon-item d-flex flex-column align-item-center">
              <img
                alt={intro.frontmatter.first_section}
                className=""
                src="images\icons\keys.svg"
              />
              <span>Schlüssel für die Immobilie</span>
            </div>
          </div>
        </section>
      </div>

      <section className="l-contact content pt-2 d-flex-md mt-md-3 mt-1 mx-md-auto mb-0 pb-0">
        <div className="form-wrapper bg-gry p-3">
          <h2 className="mt-0 h-2">Haben wir Dein Interesse wecken können?</h2>
          <p>
            Melde dich hier unverbindlich an. <br></br>
            Wir melden uns bei Dir zurück sobald es los geht!
          </p>

          <form id="contact-form">
            <div className="form-group form-entry-01">
              <label className="form-control" for="fname">
                Vorname
              </label>
              <input type="text" id="fname" name="fname"></input>
              <br></br>
            </div>

            <div className="form-group form-entry-02">
              <label className="form-control" for="plz">
                PLZ
              </label>
              <input type="text" id="plz" name="plz"></input>
              <br></br>
            </div>

            <div className="form-group form-entry-03">
              <label className="form-control" for="email">
                E-Mail
              </label>
              <input type="text" id="email" name="email"></input>
              <br></br>
            </div>

            <div className="select form-group form-entry-04">
              <select
                aria-label="Select menu example"
                id="arbeitsplatz"
                name="arbeitsplatz"
                defaultValue="0"
              >
                <option value="0">Flexibler Einzelplatz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="form-group form-entry-05 form-entry-full-width">
              <label className="control checkbox" for="location-yes">
                <input
                  type="checkbox"
                  id="location-yes"
                  name="location-yes"
                  value="Ich möchte eine Location empfehlen"
                ></input>
                <span className="control-indicator"></span>
                Ich möchte eine Location empfehlen
              </label>
              <textarea
                name="message"
                rows="5"
                cols="10"
                placeholder="Z.B. Adresse, Gebäudenamen, Kontakt etc."
              ></textarea>
            </div>

            <input
              type="submit"
              value="Anmeldung abschicken"
              className="btn btn-secondary"
            ></input>
          </form>
        </div>

        <div className="image-wrapper">
          <img
            alt={intro.frontmatter.first_section}
            className="d-none d-md-block min-width-0 "
            src="/images/suburban-coworking-contact.jpg"
          />
        </div>
      </section>

      <section className="l-social-icons content pt-0 ">
        <div className="social-wrapper bg-primary font-wht px-4 py-2">
          <p>Empfehle uns gerne Deinen Freunden und Kollegen weiter!</p>
          <div className="social-icons d-flex">
            <WhatsappShareButton
              url={shareUrl}
              title={site.title}
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton url={shareUrl} title={site.title}>
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

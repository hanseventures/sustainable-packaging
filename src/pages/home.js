import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = props => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-home container">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            {intro.frontmatter.intro_image && (
              <div className="position-relative">
                <img alt={intro.frontmatter.title} className={"introImageClasses"} src={intro.frontmatter.intro_image} />
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="l-cta content content--low  bg-primary font-wht mt-1 mx-n2 px-4">
        <h2 className="mt-0 font-wht">Unser Ziel</h2>
        <p>
          Wir wollen Co-Working Spaces dahin bringen, wo sie wirklich benötigt werden - und zwar in deine Nähe!
          <br></br>
          <br></br>
          <b>Um dieses Ziel zu erreichen brauchen wir deine Hilfe.</b>
        </p>
        <button className="btn btn-outline"><a href="#">Direkt anmelden</a></button>
      </section>

      <section className="l-first-section content d-flex-md">
        <img alt={intro.frontmatter.first_section} className="" src={intro.frontmatter.intro_image} />
        <h2>Du bist Freelancer, Angestellter oder Teil eines Teams?</h2>
        <p>
          Du brauchst <b>keinen festen Arbeitsplatz</b> oder du willst lieber doch ein <b>Einzelbüro</b>, z. B. weil du viel telefonierst? Gib deinen Wunsch mit an, dass hilft uns bei der Planung.
          <br></br>
          <br></br>
          Für <b>Unternehmen</b> bieten wir auch die Möglichkeit komplette Räume zu buchen, um ganze Teams unterbringen zu können.
        </p>
      </section>

      <section className="l-intermission font-wht position-relative">
        <h2 className="pos-abs-center text-xs-center">Ein Ort der Ruhe, zum Arbeiten und Denken.</h2>
        <img alt={intro.frontmatter.first_section} className="" src={intro.frontmatter.intro_image} />
      </section>

      <section className="l-products content d-flex-md">
        <h2>So lässt es sich gut arbeiten!</h2>
        <p>
          Bei uns soll es nicht nur gute Atmosphäre geben, sondern du sollst auch gesund sitzen.
        </p>
        <div className="">
          <img alt={intro.frontmatter.first_section} className="" src={intro.frontmatter.intro_image} />
          <h3>Unsere Stühle</h3>
          <p>
            Alle Arbeitsplätze werden mit ergonomischen, flexiblen, adjustierbaren Stühlen besetzt. Natürlich ist der Stuhl auch frei von Schadstoffen.
          </p>
        </div>
        <div className="">
          <img alt={intro.frontmatter.first_section} className="" src={intro.frontmatter.intro_image} />
          <h3>Unsere Tische</h3>
          <p>
            Hochwertige Tische mit schwarzer Tischplatte aus HPL Fenix Beschichtung und einem hochwertigem Gestell aus Echtholz-Esche. Hier wackelt nichts und es gibt ausreichend Platz zu arbeiten.
            <br></br>
            <br></br>
            <b>H: 74 cm - B: 160 cm - T: 80 cm</b>
          </p>
        </div>
        <div className="">
          <img alt={intro.frontmatter.first_section} className="" src={intro.frontmatter.intro_image} />
          <h3>Meeting? Kein Problem!</h3>
          <p>
            Unsere Telefon- und Meetingboxen aus Echtholz haben eine Schallreduktion von 35 dB. So kannst du ganz ungstört an Meetings teilnehmen.
            <br></br>
            <br></br>
            <b>H: 225 cm - B: 100 cm - T: 100 cm</b>
          </p>
        </div>
      </section>

      <section className="l-locations content d-flex-md">
        <h2>Zu den Locations</h2>
        <p>
          Wir wollen nicht 100 Leute in einer Location haben. Deshalb sind wir auf der Suche nach <b>kleinen leerstehenden Gewerbeflächen</b>.
          <br></br>
          <br></br>
          Sobald eine Location gefunden wurde, wird diese von unseren Innenarchitekten ausgestattet.
        </p>
      </section>

      <section className="l-prices content d-flex-md">
        <h2>Unsere Preise</h2>
        <p>
          Let's keep it simple.
        </p>
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

      <section className="l-icons content d-flex-md">
        <h2>Diese Services sind inklusive</h2>
        <div className="icon-wrapper d-flex flex-wrap flex-row flex-justify-center">
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_branding_1885335.svg" />
            <span>Wifi</span>
          </div>
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_3d modeling_1885342.svg" />
            <span>Kaffeevollautomat</span>
          </div>
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_branding_1885335.svg" />
            <span>Wasserspender</span>
          </div>
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_3d modeling_1885342.svg" />
            <span>Kühlschrank</span>
          </div>
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_branding_1885335.svg" />
            <span>Mikrowelle</span>
          </div>
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_3d modeling_1885342.svg" />
            <span>Reinigung</span>
          </div>
          <div className="icon-item d-flex flex-column align-item-center">
            <img alt={intro.frontmatter.first_section} className="" src="images\features\noun_branding_1885335.svg" />
            <span>Schlüssel für die Immobilie</span>
          </div>
        </div>
      </section>


      <section className="l-contact content pt-2 bg-gry">
        <h2 className="h-2">Haben wir Dein Interesse wecken können?</h2>
        <p>
          Melde dich hier unverbindlich an. <br></br>
          Wir melden uns bei Dir zurück sobald es los geht!
        </p>

        <form>

        <div className="form-group">
          <label className="form-control" for="fname">Vorname:</label>
          <input type="text" id="fname" name="fname" ></input><br></br>
        </div>
          <label for="plz">PLZ</label><br></br>
          <input type="text" id="plz" name="plz"></input>

          <div class="select">
            <select aria-label="Select menu example" id="arbeitsplatz" name="arbeitsplatz">
              <option selected>Flexibler Einzelplatz</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <label className="control checkbox" for="location-yes">
            <input type="checkbox" id="location-yes" name="location-yes" value="Ich möchte eine Location empfehlen"></input>
            <span className="control-indicator"></span>
            Ich möchte eine Location empfehlen
          </label>

          <textarea name="message" rows="10" cols="30" placeholder="Z.B. Adresse, Gebäudenamen, Kontakt etc.">

          </textarea>

          <input type="submit" value="Anmeldung abschicken" className="btn btn-secondary"></input>
        </form>
      </section>


    </Layout>
  );
};

export const query = graphql`
  query {
    intro: markdownRemark(
      fileAbsolutePath: {regex: "/content/home.md/"}
    ) {
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
`;

export default Home;

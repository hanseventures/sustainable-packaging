import React from 'react'

const TestimonialsV1 = props => {
  return (
    <section id="kundenstimmen" className="l-testimonials-v2 container bg-secondary">

      <div className="content content-default d-grid">

        <div className="wrapper text-xs-center">

          <h3 className="font-wht">Das sagen unsere Kunden</h3>

          <div className="mb-4 d-flex">

            <article className="d-flex flex-align-center flex-column">

              <img src="/images/lvz/lvz-testimonials-02@2x.png" alt="avatar"></img>

              <div className="mb-4 mt-2">
                <small className="font-xs">
                  <strong>David van Laak</strong>
                  <br />
                  Geschäftsführer
                </small>
              </div>

              <blockquote className="mx-3 font-sm">
                <i>Im Einzelhandel benötigen wir immer neue innovative Verpackungen. XYZ konnte uns da mit ihrem Know-How sehr gut unterstützen.</i>
              </blockquote>

            </article>

            <article className="d-flex flex-align-center flex-column">

              <img src="/images/lvz/lvz-testimonials-03@2x.png" alt="avatar"></img>

              <blockquote className="mx-3 font-sm">
                <i>"Seit nunmehr 53 Jahren ist die LVZ ein verlässlicher Partner, um Neuigkeiten von den akademixern der Leserschaft nahe zu bringen. Danke dafür!"</i>
              </blockquote>

              <div className="mb-4 mt-2">
                <small className="font-xs">
                  <strong>Dörte Waurick</strong>
                  <br></br>
                  Geschäftsführerin <br></br> Kabarett akademixer
                </small>
              </div>

              <img src="/images/lvz/lvz-testimonial-logo-academixer.jpg" alt="tunici restaurant logo" className="mb-4"></img>

            </article>

            <article className="d-flex flex-align-center flex-column">

              <img src="/images/lvz/lvz-testimonials-01@2x.png" alt="avatar"></img>

              <blockquote className="mx-3 font-sm">
                <i>"Wir schätzen die LVZ als Werbepartner sehr. Sie macht, wie auch unser Unternehmen, für viele Leipziger die Zeit zu Hause nach manch turbulentem Tag erst richtig behaglich."</i>
              </blockquote>

              <div className="mb-4 mt-2">
                <small className="font-xs">
                  <strong>Nico Wehrmann</strong>
                  <br></br>
                  Inhaber <br></br> Betten Wehrmann
                </small>
              </div>

              <img src="/images/lvz/lvz-testimonial-logo-wehmann.jpg" alt="tunici restaurant logo" className="mb-4"></img>

            </article>

          </div>

        </div>

      </div>

    </section>

  )
}
export default TestimonialsV1

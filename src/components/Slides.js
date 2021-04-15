import { Link } from "gatsby"
import React from "react"

const Slides = props => {
  return (
    <div className="slides" data-step={props.step}>

      <div className="slide-wrapper">
        {props.slides.map((slide, index) => (
          <div className="slide mx-3" key={index}>

            <div className="slide-content">
              <h1 className="text-xs-left font-wht">{slide.node.title}</h1>
              <h4 className="text-xs-left font-wht">{slide.node.text}</h4>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
export default Slides

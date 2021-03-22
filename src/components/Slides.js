import { Link } from "gatsby"
import React from "react"

const Slides = props => {
  return (
    <div className="Slides" data-step={props.step}>
      <div className="Wrapper">
        {props.slides.map((slide, index) => (
          <div className="Slide" key={index}>
            <div className="Logo">
              <Link to="/">
                <img
                  height="36px"
                  alt={slide.node.logo.alt}
                  src={slide.node.logo}
                />
              </Link>
            </div>
            <h1 className="Title">{slide.node.title}</h1>
            <div className="Text">{slide.node.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Slides

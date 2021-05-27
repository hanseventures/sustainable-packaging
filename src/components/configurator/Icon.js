import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

class Icon extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    fill: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    className: PropTypes.string,
  }

  static defaultProps = {
    fill: '#000',
    className: ''
  }

  beforeInjection = (svg) => {
    const { className, fill } = this.props
    svg.classList.add(className)

    const paths = Array.from(svg.getElementsByTagName('path'))

    paths.forEach((path, i) => {
      const color = fill[i] ? fill[i] : fill[0]
      path.setAttribute('fill', color)
      path.setAttribute('stroke', color)
    })
  }

  render() {
    const { src } = this.props
    return (
      <ReactSVG
        beforeInjection={this.beforeInjection}
        src={src}
      />
    )
  }
}

export default Icon

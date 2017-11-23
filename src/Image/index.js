import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ src, alt, ...props }) => {
  const className = cx('image', props.className)
  const Element = s.Image.withComponent('img')

  return (
    <Element {...props} src={src} alt={alt} className={className} />
  )
}

Component.displayName = 'Image'
Component.defaultProps = {
}

export default Component

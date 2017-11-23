import React from 'react'

import Button from 'Button'

const Component = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

Component.displayName = 'Load More Button'
Component.defaultProps = {
  color: 'white'
}

export default Component

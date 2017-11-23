import React from 'react'

import Box from 'Box'
import LoadMoreButton from 'LoadMoreButton'

const Component = ({ children, ...props }) => {
  return <Box>
    <LoadMoreButton {...props}>{children}</LoadMoreButton>
  </Box>
}

Component.displayName = 'Load More Button Container'
Component.defaultProps = {
  color: 'red'
}

export default Component

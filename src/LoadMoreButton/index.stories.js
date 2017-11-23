import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import LoadMoreButton from '.'

storiesOf('LoadMoreButton', module)
  .add('index',
    withTheme(() => {
      return (
        <div>
          <Box>
            <LoadMoreButton onClick={function(){ alert('You clicked!')}}>Load more</LoadMoreButton>
          </Box>
        </div>
      )
    }))

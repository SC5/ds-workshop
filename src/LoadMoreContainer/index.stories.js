import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import LoadMoreContainer from '.'

storiesOf('LoadMoreContainer', module)
  .add('index',
    withTheme(() => {
      return (
        <div>
          <Box>
            <LoadMoreContainer onClick={function(){ alert('Loading more...')}}>Load more button</LoadMoreContainer>
          </Box>
        </div>
      )
    }))

import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Box from 'Box'
import LoadMoreButtonContainer from '.'

storiesOf('LoadMoreButtonContainer', module)
  .add('index',
    withTheme(() => {
      return (
        <div>
          <Box>
            <LoadMoreButtonContainer onClick={function(){ alert('Loading more...')}}>Load more button</LoadMoreButtonContainer>
          </Box>
        </div>
      )
    }))

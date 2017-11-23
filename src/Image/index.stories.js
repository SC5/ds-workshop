import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import Image from '.'
import Box from '../Box'

storiesOf('Image', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <Image src='https://laughingsquid.com/wp-content/uploads/lightning-cat-20100422-160026.jpg' alt='some alt text' />
        </Box>
      </div>
    )
  }))
  .add('with border', withTheme(() => {
    return (
      <Box>
        <Image src='https://laughingsquid.com/wp-content/uploads/lightning-cat-20100422-160026.jpg' alt='asdf' hasBorder />
      </Box>
    )
  }))

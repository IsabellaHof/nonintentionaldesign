/* global module */
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import ImageScreen from '../components/ImageScreen.js'
import ImageScreenHeader from '../components/ImageScreenHeader.js'

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
`

storiesOf('ImageScreen', module).add('default', () => (
  <Wrapper>
    <ImageScreen />
  </Wrapper>
))

storiesOf('Header', module).add('default', () => <ImageScreenHeader />)

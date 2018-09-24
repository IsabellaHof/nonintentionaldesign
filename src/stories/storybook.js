/* global module */
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs/react'

import ImageScreen from '../components/screen/ImageScreen.js'
import DetailScreen from '../components/screen/DetailScreen.js'
import DetailScreenHeader from '../components/DetailScreenHeader.js'
import ImageScreenHeader from '../components/ImageScreenHeader.js'
import { BrowserRouter as Router } from 'react-router-dom'
import nid_1 from '../img/nid_1.jpg'
import nid_2 from '../img/nid_2.jpg'
import nid_3 from '../img/nid_3.jpg'
import nid_4 from '../img/nid_4.jpg'

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
`

storiesOf('ImageScreen', module).add('default', () => (
  <Router>
    <Wrapper>
      <ImageScreen
        finds={[
          { image: nid_1 },
          { image: nid_2 },
          { image: nid_3 },
          { image: nid_4 },
        ]}
        onImageClick={action('onImageClick')}
      />
    </Wrapper>
  </Router>
))

storiesOf('Header', module).add('default', () => <ImageScreenHeader />)

storiesOf('DetailScreenHeader', module).add('default', () => (
  <Router>
    <DetailScreenHeader />
  </Router>
))

storiesOf('DetailScreen', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Router>
      <DetailScreen
        finds={[
          {
            image: nid_1,
            findName: 'Flycatcher',
            findDescription:
              'Moving flycatchers are by far the most creative and fascinating «Non Intentional Design» objects. Often they are found in markets in Laos and Thailand. In a market in Chiang Mai were tied to a ceiling fan, two pieces of wire and plastic belts to it. By the rotational movement of unwanted tickets sold.',
            id: '001',
          },
        ]}
        selectedIndex={number('selectedIndex', 0)}
      />
    </Router>
  ))

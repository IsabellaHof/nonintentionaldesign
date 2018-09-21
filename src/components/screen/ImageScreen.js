import React, { Component } from 'react'
import styled from 'styled-components'
import nid_1 from '../../img/nid_1.jpg'
import nid_2 from '../../img/nid_2.jpg'
import nid_3 from '../../img/nid_3.jpg'
import nid_4 from '../../img/nid_4.jpg'
import nid_5 from '../../img/nid_5.jpg'
import nid_6 from '../../img/nid_6.jpg'
import nid_7 from '../../img/nid_7.jpg'
import nid_8 from '../../img/nid_8.jpg'
import ImageScreenHeader from '../ImageScreenHeader'

const StyledImageContainer = styled.div`
  columns: 2;
  margin-top: -8px;
`
const Image = styled.img`
  margin-bottom: 25px;
  height: auto;
  width: 100%;
`

export default class ImageScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageScreenHeader />
        <StyledImageContainer>
          <Image src={nid_1} alt="" />
          <Image src={nid_2} alt="" />
          <Image src={nid_3} alt="" />
          <Image src={nid_4} alt="" />
          <Image src={nid_5} alt="" />
          <Image src={nid_6} alt="" />
          <Image src={nid_7} alt="" />
          <Image src={nid_8} alt="" />
        </StyledImageContainer>
      </React.Fragment>
    )
  }
}

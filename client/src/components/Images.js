import React from 'react'
import styled from 'styled-components'
import closeButton_white from '../img/closebutton_white.svg'

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  margin: 0 0 20px 0;
`
const ImageDeleteButton = styled.div`
  margin: 10px 0 10px 0;
  padding-top: 20px;
`

export default props =>
  props.images.map((image, i) => (
    <div key={i}>
      <ImageDeleteButton
        onClick={() => this.props.removeImage(image.public_id)}
      >
        <img src={closeButton_white} alt="Logo" />
      </ImageDeleteButton>

      <ImageStyled src={image.secure_url} alt="" />
    </div>
  ))

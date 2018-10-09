import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0 20px 0;
`

export default props =>
  props.images.map((image, i) => (
    <div key={i}>
      <div onClick={() => props.removeImage(image.public_id)} />
      <ImageStyled
        src={image.secure_url}
        alt=""
        onError={() => props.onError(image.public_id)}
      />
    </div>
  ))

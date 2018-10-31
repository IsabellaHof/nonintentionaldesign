import React, { Component } from 'react'
import Images from './Images.js'
import UploadButton from './UploadButton.js'
import Spinner from './Spinner.js'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const UploadImageStyled = styled.div``

export default class UploadImage extends Component {
  static propTypes = {
    onDone: PropTypes.func,
    removeImage: PropTypes.func,
  }

  state = {
    uploadError: false,
    uploading: false,
    images: [],
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch('http://localhost:5000/api/finds/image-upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(newImages => {
        this.setState({
          uploading: false,
          uploadError: false,
          images: [...this.state.images, ...newImages],
        })
        this.props.onDone(newImages[0].secure_url)
      })
      .catch(err => {
        this.setState({ uploadError: true })
      })
  }

  render() {
    const { uploading, images, uploadError } = this.state

    const content = () => {
      switch (true) {
      case uploading:
        return <Spinner />
      case images.length > 0:
        return <Images images={images} removeImage={this.removeImage} />
      case uploadError:
        return <div>Error!</div>
      default:
        return <UploadButton onChange={this.onChange} />
      }
    }
    return <UploadImageStyled>{content()}</UploadImageStyled>
  }
}

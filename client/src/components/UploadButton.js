import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  padding: 25px 0 25px 0;
  justify-content: center;
  display: flex;
`
const UploadBox = styled.div`
  border: 6px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 140px;
  font-weight: 300;
  height: 209px;
  justify-content: center;
  margin-bottom: 25px;
  width: 209px;
`
const Plus = styled.a`
  display: flex;
  position: relative;
  left: -110px;
  align-content: center;
  justify-content: center;
`

const UploadBoxInput = styled.input`
  cursor: pointer;
  opacity: 0;
  width: 209px;
  height: 209px;
  position: relative;
  left: 40px;
`

export default class UploadButton extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  render() {
    const { onChange } = this.props
    return (
      <React.Fragment>
        <Container>
          <UploadBox>
            <UploadBoxInput type="file" id="single" onChange={onChange} />
            <Plus>+</Plus>
          </UploadBox>
        </Container>
      </React.Fragment>
    )
  }
}

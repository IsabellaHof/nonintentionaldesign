import React, { Component } from 'react'
import DetailScreenHeader from '../DetailScreenHeader'
import NavigationBarUpload from '../NavigationBarUpload'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import plusUpload from '../../img/plus_upload.svg'

const ImageScreenContainer = styled.div`
  columns: 2;
  margin-top: 65px;
`
const Image = styled.img`
  height: auto;
  margin-bottom: 25px;
  width: 100%;
`
const UploadScreenbox = styled.div`
  align-content: center;
  border: 6px solid #fc4955;
  cursor: pointer;
  display: flex;
  height: 209px;
  justify-content: center;
  margin-bottom: 25px;
  width: auto;
`

export default class UploadScreen extends Component {
  componentDidMount() {
    this.props.fetchFinds()
  }

  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    onImageClick: PropTypes.func.isRequired,
    fetchFinds: PropTypes.func.isRequired,
  }

  render() {
    if (this.props.finds) {
      const { onImageClick, finds } = this.props
      return (
        <React.Fragment>
          <DetailScreenHeader />
          <ImageScreenContainer>
            <Link to={'/uploaddetail'}>
              <UploadScreenbox>
                <img src={plusUpload} alt="" />{' '}
              </UploadScreenbox>
            </Link>

            {finds.map((find, index) => {
              return (
                <Link to={`/finds/${find._id}`} key={index}>
                  <Image
                    key={index}
                    onClick={() => onImageClick(index)}
                    src={find.image}
                    alt=""
                  />
                </Link>
              )
            })}
          </ImageScreenContainer>
          <NavigationBarUpload />
        </React.Fragment>
      )
    } else {
      return <div>Help</div>
    }
  }
}

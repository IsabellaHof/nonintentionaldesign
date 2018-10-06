import React, { Component } from 'react'
import DetailScreenHeader from '../DetailScreenHeader'
import NavigationBarUpload from '../NavigationBarUpload'

export default class UploadScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <DetailScreenHeader />
        <NavigationBarUpload />
      </React.Fragment>
    )
  }
}

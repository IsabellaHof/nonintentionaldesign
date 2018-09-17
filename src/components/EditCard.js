import React, { Component } from 'react'
import styled from 'styled-components'
import PointButtonBar from './PointButtonBar'
import PropTypes from 'prop-types'

const StyledBoard = styled.section`
  margin: 50px;
`

export default class EditCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    onUpdate: PropTypes.func,
  }

  render() {
    const { title, score, onUpdate } = this.props
    return (
      <StyledBoard>
        <span>{title}</span>
        <span>{score}</span>
        <PointButtonBar onClick={onUpdate} />
      </StyledBoard>
    )
  }
}

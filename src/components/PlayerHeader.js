import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FlexWrapper = styled.section`
  margin: 50px;
  padding: 4px;
  justify-content: space-between;
  display: flex;
  background: blueviolet;
  color: white;
`

export default class PlayerHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
  }
  render() {
    const { title, score } = this.props
    return (
      <div>
        <FlexWrapper>
          <span>{title}</span>
          <span>{score}</span>
        </FlexWrapper>
      </div>
    )
  }
}

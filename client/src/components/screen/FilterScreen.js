import React, { Component } from 'react'
import DetailScreenHeader from '../DetailScreenHeader'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FilterContainer = styled.div`
  margin-top: 100px;
  display: flex;
`

const TagMainPointStyled = styled.a`
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`
const TagStyled = styled.div`
  border: 2px solid #fc4955;
  color: #fc4955;
  display: inline-block;
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 700;
  margin-right: 6px;
  margin-top: 6px;
  margin-bottom: 20px;
  padding: 6px;

  &:hover {
    background-color: #fc4955;
    color: white;
    font-family: 'Roboto Mono';
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    font-family: 'Roboto Mono';
    font-size: 14px;
    font-weight: 400;
    margin-right: 6px;
    margin-top: 6px;
    margin-bottom: 20px;
    padding: 6px;
  }
`

export default class FilterScreen extends Component {
  static propTypes = {
    state: PropTypes.arrayOf(PropTypes.object),
    finds: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number,
  }

  render() {
    return (
      <React.Fragment>
        <DetailScreenHeader />
        <FilterContainer>
          <TagMainPointStyled>Material</TagMainPointStyled>
          <TagStyled>Laos</TagStyled>
        </FilterContainer>
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react'
import DetailScreenHeader from '../DetailScreenHeader'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavigationBarFilter from '../NavigationBarFilter'

const FilterContainer = styled.div`
  margin-top: 80px;
  display: grid;
`
const TagMainPointStyled = styled.a`
  color: #000000;
  font-size: 16px;
  margin-bottom: 20px;
`
const TagStyled = styled.div`
  border: 2px solid #fc4955;
  color: #fc4955;
  display: inline-block;
  font-size: 14px;
  margin: 6px 6px 20px 0;
  padding: 6px;

  &:hover {
    background-color: #fc4955;
    color: white;
  }
`
const ImageScreenContainer = styled.div`
  margin-top: 25px;
  columns: 2;
`
const Image = styled.img`
  margin-bottom: 25px;
  height: auto;
  width: 100%;
`

export default class FilterScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
  }

  render() {
    const { finds } = this.props
    // console.log(finds)
    const firstCountry = finds[4]
    const secondCountry = finds[3]

    return (
      <React.Fragment>
        <DetailScreenHeader />
        <FilterContainer>
          <section>
            <TagMainPointStyled>Country</TagMainPointStyled>
            <div>
              <TagStyled>{firstCountry.findCountry}</TagStyled>
              <TagStyled>{secondCountry.findCountry}</TagStyled>
            </div>
          </section>

          <section>
            <TagMainPointStyled>
              City
              <div>
                <TagStyled>Bangkok</TagStyled>
                <TagStyled>Phonsavan</TagStyled>
              </div>
            </TagMainPointStyled>
          </section>
        </FilterContainer>
        <hr />

        <ImageScreenContainer>
          {finds.map((find, index) => {
            return <Image key={index} src={find.image} alt="" />
          })}
        </ImageScreenContainer>

        <NavigationBarFilter />
      </React.Fragment>
    )
  }
}

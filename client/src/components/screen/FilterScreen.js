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
  state = {}

  componentDidMount() {
    this.props.fetchFinds()
  }

  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
    fetchFinds: PropTypes.func.isRequired,
  }

  checkForCountry = country => {
    const { finds } = this.props
    let i
    let urls = []

    for (i = 0; i < finds.length; i++) {
      if (finds[i].findCountry === country) {
        let url = finds[i].image
        urls = [...urls, url]
      }
    }
    this.setState({ imageURLs: urls })
  }

  renderImages() {
    if (this.state.imageURLs) {
      return this.state.imageURLs.map((image, index) => {
        return <Image key={index} src={image} alt="" />
      })
    } else {
      <div />
    }
  }

  render() {
    if (this.props.finds) {
      const { finds } = this.props
      let i
      let countries = []

      for (i = 0; i < finds.length; i++) {
        let country = finds[i].findCountry
        if (!countries.includes(country)) {
          countries = [...countries, country]
        }
      }
      return (
        <React.Fragment>
          <DetailScreenHeader />
          <FilterContainer>
            <section>
              <TagMainPointStyled>Country</TagMainPointStyled>
              <div>
                {countries.map((country, index) => {
                  return (
                    <TagStyled
                      key={index}
                      onClick={() => this.checkForCountry(country)}
                    >
                      {country}
                    </TagStyled>
                  )
                })}
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

          <ImageScreenContainer>{this.renderImages()}</ImageScreenContainer>

          <NavigationBarFilter />
        </React.Fragment>
      )
    } else {
      return <div>Help</div>
    }
  }
}

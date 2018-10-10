import React, { Component } from 'react'
import DetailScreenHeader from '../DetailScreenHeader'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavigationBarFilter from '../NavigationBarFilter'
import { Link } from 'react-router-dom'

const FilterContainer = styled.div`
  margin-top: 80px;
  display: grid;
`
const TagMainPointStyled = styled.a`
  color: #000000;
  font-size: 16px;
`
const TagStyled = styled.div`
  border: 2px solid #fc4955;
  color: #fc4955;
  display: inline-block;
  font-size: 14px;
  margin: 6px 6px 6px 0;
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
    onImageClick: PropTypes.func.isRequired,
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

  checkForCity = city => {
    const { finds } = this.props
    let i
    let urls = []

    for (i = 0; i < finds.length; i++) {
      if (finds[i].findCity === city) {
        let url = finds[i].image
        urls = [...urls, url]
      }
    }
    this.setState({ imageURLs: urls })
  }

  checkForMaterial = material => {
    const { finds } = this.props
    let i
    let urls = {}

    for (i = 0; i < finds.length; i++) {
      if (finds[i].findMaterial === material) {
        let url = finds[i].image
        urls = [...urls, url]
      }
    }
    this.setState({ imageURLs: urls })
  }

  renderImages() {
    const { onImageClick } = this.props
    if (this.state.imageURLs) {
      return this.state.imageURLs.map((image, index) => {
        return (
          <Link to={`/finds/${image._id}`} key={index}>
            {' '}
            <Image
              key={index}
              src={image}
              alt=""
              onClick={() => onImageClick(index)}
            />
          </Link>
        )
      })
    }
  }

  render() {
    if (this.props.finds) {
      const { finds } = this.props
      let i
      let countries = []
      let cities = []
      let materials = []

      for (i = 0; i < finds.length; i++) {
        let country = finds[i].findCountry
        if (!countries.includes(country)) {
          countries = [...countries, country]
        }
      }

      for (i = 0; i < finds.length; i++) {
        let city = finds[i].findCity
        if (!cities.includes(city)) {
          cities = [...cities, city]
        }
      }

      for (i = 0; i < finds.length; i++) {
        let material = finds[i].findMaterial
        console.log(finds[i].findMaterial)
        if (!materials.includes(material)) {
          materials = [...materials, material]
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

            <section style={{ marginTop: '20px' }}>
              <TagMainPointStyled>City</TagMainPointStyled>
              <div>
                {cities.map((city, index) => {
                  return (
                    <TagStyled
                      key={index}
                      onClick={() => this.checkForCity(city)}
                    >
                      {city}
                    </TagStyled>
                  )
                })}
              </div>
            </section>

            <section style={{ margin: '20px 0 20px 0' }}>
              <TagMainPointStyled>Material</TagMainPointStyled>
              <div>
                {materials.map((material, index) => {
                  return (
                    <TagStyled
                      key={index}
                      onClick={() => this.checkForMaterial(material)}
                    >
                      {material}
                    </TagStyled>
                  )
                })}
              </div>
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

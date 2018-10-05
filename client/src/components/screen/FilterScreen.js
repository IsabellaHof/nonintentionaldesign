import React, { Component } from 'react'
import DetailScreenHeader from '../DetailScreenHeader'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FilterContainer = styled.div`
  margin-top: 100px;
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
  margin-right: 6px;
  margin-top: 6px;
  margin-bottom: 20px;
  padding: 6px;

  &:hover {
    background-color: #fc4955;
    color: white;
  }
`

export default class FilterScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
  }

  render() {
    const { finds } = this.props
    // console.log(finds)
    const firstCountry = finds[3]

    return (
      <React.Fragment>
        <DetailScreenHeader />
        <FilterContainer>
          <section>
            <TagMainPointStyled>Country</TagMainPointStyled>
            <div>{firstCountry.findCountry}</div>
          </section>

          <section>
            <TagMainPointStyled>
              City
              <div>
                <TagStyled>Laos</TagStyled>
              </div>
            </TagMainPointStyled>
          </section>

          {/* <section>
            <TagMainPointStyled>
              Material
              <div>
                <TagStyled>Laos</TagStyled>
              </div>
            </TagMainPointStyled>
          </section> */}
        </FilterContainer>
      </React.Fragment>
    )
  }
}

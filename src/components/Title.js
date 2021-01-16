import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import { colors, metrics } from '../styles'

const Container = styled.View`
  border-bottom-width: 2px;
  border-color: ${colors.dark};
  padding-vertical: ${metrics.baseMargin * 2}px;
`

const Text = styled.Text`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${colors.black};
`

class Title extends Component {
  goToDetails = () => {}

  render() {
    const { title } = this.props

    return (
      <Container>
        <Text>{title}</Text>
      </Container>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title

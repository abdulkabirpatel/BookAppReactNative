import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import styled from 'styled-components/native'
import { colors } from './styles'

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

const Container = styled.SafeAreaView`
  flex-grow: 3;
  justify-content: center;
  align-items: center;
`

const Footer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Tagline = styled.Text`
  color: ${colors.black};
  font-size: 24px;
`

const Title = styled.Text`
  color: ${colors.black};
  font-size: 48px;
`

const Button = styled.TouchableHighlight`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  box-shadow: 0px 7px 15px rgba(60, 120, 191, 0.422639);
`

const styles = StyleSheet.create({
  icon: {
    marginLeft: 2,
    marginTop: 1,
  },
  loading: {
    marginLeft: 3,
    marginTop: 2,
  },
})

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  state = {
    loading: false,
  }

  goToList = () => {
    const { navigation } = this.props
    this.setState({ loading: true })

    setInterval(() => {
      navigation.navigate('Books')
    }, 500)
  }

  render() {
    const { loading } = this.state
    return (
      <Background source={require('~/assets/images/background.jpg')}>
        <Container>
          <Tagline>Welcome to</Tagline>
          <Title>BooksApp</Title>
        </Container>
        <Footer>
          <Button onPress={this.goToList}>
            {loading ? (
              <ActivityIndicator size='large' color={colors.white} style={styles.loading} />
            ) : (
              <Icon
                name='ios-arrow-round-forward'
                size={48}
                color={colors.white}
                style={styles.icon}
              />
            )}
          </Button>
        </Footer>
      </Background>
    )
  }
}

export default Home

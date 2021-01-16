import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import styled from 'styled-components/native'
import { colors, metrics } from '../styles'

import Title from '../components/Title'

const Container = styled.SafeAreaView`
  padding-vertical: ${metrics.basePadding}px;
  flex: 1;
`

const BookWrapper = styled.View`
  padding: ${metrics.basePadding}px;
  padding-bottom: ${metrics.basePadding * 1.5}px;
  background-color: ${colors.primary};
  flex-direction: row;
`

const ThumbnailWrapper = styled.View`
  flex-direction: column;
  padding-right: ${metrics.basePadding}px;
  width: ${100 + metrics.basePadding}px;
`

const Thumbnail = styled.View`
  box-shadow: 0px 15px 20px rgba(184, 118, 12, 0.8);
  height: 130px;
  max-width: 100%;
`

const Pages = styled.Text`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${colors.light};
  margin-top: 30px;
  text-align: center;
`

const InfoWrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const BookTitle = styled.Text`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${colors.black};
`

const Author = styled.Text`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${colors.light};
  margin-top: ${metrics.baseMargin / 2};
`

const PriceWrapper = styled.View`
  margin-top: ${metrics.baseMargin * 2};
  flex-direction: row;
  align-items: center;
`

const Price = styled.Text`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${colors.black};
  margin-right: ${metrics.baseMargin};
`

const Rating = styled.View`
  justify-content: center;
  flex-direction: row;
`

const ButtonsWrapper = styled.View`
  margin-top: ${metrics.basePadding * 1.5}px;
  flex-direction: row;
  justify-content: flex-end;
`

const BuyButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  width: 116px;
  height: 36px;
  border-radius: 18px;
  box-shadow: 0px 7px 15px rgba(60, 120, 191, 0.422639);
  justify-content: center;
  align-items: center;
`

const BuyButtonText = styled.Text`
  font-family: 'Roboto';
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 13px;
  font-weight: bold;
`

const LikeButton = styled.TouchableOpacity`
  background-color: ${colors.tertiary};
  width: 36px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-left: ${metrics.baseMargin};
`

const DescriptionWrapper = styled.ScrollView`
  padding-horizontal: ${metrics.basePadding}px;
`

const Description = styled.Text`
  padding-top: ${metrics.basePadding * 1.5}px;
  padding-bottom: ${metrics.basePadding}px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  color: ${colors.gray};
  line-height: 30px;
`

const styles = StyleSheet.create({
  likeIcon: {
    marginTop: 3,
  },
  rateIcon: {
    marginRight: 4,
  },
  thumbnail: {
    height: 130,
    width: 100,
  },
})

const Details = ({ navigation }) => {
  const {
    book: { volumeInfo },
  } = navigation.state.params

  return (
    <Container>
      <BookWrapper>
        <ThumbnailWrapper>
          <Thumbnail>
            <Image source={{ uri: volumeInfo.imageLinks.thumbnail }} style={styles.thumbnail} />
          </Thumbnail>
          <Pages>
            {volumeInfo.pageCount}
            {' pages'}
          </Pages>
        </ThumbnailWrapper>
        <InfoWrapper>
          <View>
            <BookTitle>{volumeInfo.title}</BookTitle>
            <Author>
              {'by '}
              {volumeInfo.authors}
            </Author>
            <PriceWrapper>
              <Price>$9.99</Price>
              <Rating>
                <Icon name='ios-star' size={15} color={colors.darker} style={styles.rateIcon} />
                <Icon name='ios-star' size={15} color={colors.darker} style={styles.rateIcon} />
                <Icon name='ios-star' size={15} color={colors.darker} style={styles.rateIcon} />
                <Icon name='ios-star' size={15} color={colors.darker} style={styles.rateIcon} />
                <Icon name='ios-star' size={15} color={colors.yep} style={styles.rateIcon} />
              </Rating>
            </PriceWrapper>
          </View>
          <ButtonsWrapper>
            <BuyButton onPress={() => {}}>
              <BuyButtonText>Buy</BuyButtonText>
            </BuyButton>
            <LikeButton onPress={() => {}}>
              <Icon name='md-heart-empty' size={24} color={colors.white} style={styles.likeIcon} />
            </LikeButton>
          </ButtonsWrapper>
        </InfoWrapper>
      </BookWrapper>
      <DescriptionWrapper>
        <Description>{volumeInfo.description}</Description>
      </DescriptionWrapper>
    </Container>
  )
}

Details.navigationOptions = {
  headerTitle: <Title title='Details' />,
  headerRight: null,
  headerStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
    height: 68,
  },
  headerBackImage: <Icon name='ios-arrow-round-back' size={36} color={colors.black} />,
  headerLeftContainerStyle: { paddingLeft: metrics.basePadding },
  headerRightContainerStyle: { paddingRight: metrics.basePadding },
}

// Details.propTypes = {
//   navigation: PropTypes.shape(
//     PropTypes.shape({
//       volumeInfo: PropTypes.string.isRequired,
//     }),
//   ),
// }

export default Details

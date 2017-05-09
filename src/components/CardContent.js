import React from 'react'
import { View, Text, Image } from 'react-native'
import { Avatar } from 'react-native-elements'

export default CardContent = props => {
  const { title, artist, thumbnail } = props
  const {
    textViewStyle,
    textStyle,
    thumbnailStyle,
    Container,
    thumbnailContainer
  } = styles

  return (
    <View style={Container}>
      <View style={thumbnailContainer}>
        <Image
          source={{ uri: thumbnail }}
          style={thumbnailStyle}
        />
      </View>
      <View style={textViewStyle}>
        <Text style={textStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </View>
  )
}

const styles = {
  textViewStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}
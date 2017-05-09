import React from 'react'
import { View, Text, Image } from 'react-native'
import { Avatar } from 'react-native-elements'

export default CardContent = props => {
  const { title, artist, thumbnail } = props
  const { textStyle, thumbnailStyle, viewContainer } = styles

  return (
    <View style={viewContainer}>
      <View>
        <Image
          source={{ uri: thumbnail }}
          style={thumbnailStyle}
        />
      </View>
      <View style={textStyle}>
        <Text>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </View>
  )
}

const styles = {
  textStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  viewContainer: {
    flexDirection: 'row'
  }
}
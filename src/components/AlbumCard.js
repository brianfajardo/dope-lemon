import React from 'react'
import { View, Text, Linking } from 'react-native'
import { Card, Button } from 'react-native-elements'

import CardContent from './CardContent'

export default (props) => {
  const {
    title,
    artist,
    url,
    image,
    thumbnail_image
   } = props.album
  const { buttonStyle, textStyle, imageStyle } = styles

  return (
    <Card image={{ uri: image }} imageStyle={imageStyle}>
      <CardContent
        title={title}
        artist={artist}
        thumbnail={thumbnail_image}
      />
      <Button
        icon={{ name: 'shop' }}
        backgroundColor='#007aff'
        buttonStyle={buttonStyle}
        title='Buy'
        raised
        onPress={() => Linking.openURL(url)}
      />
    </Card>
  )
}

const styles = {
  textStyle: {
    marginBottom: 10
  },
  buttonStyle: {
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 5,
    height: 35
  },
  imageStyle: {
    height: 250,
    width: null
  }
}
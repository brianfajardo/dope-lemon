import React from 'react'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'

import CardContent from './CardContent'

export default AlbumCard = props => {
  const {
    title,
    artist,
    url,
    image,
    thumbnail_image
   } = props.album
  const { buttonStyle, textStyle } = styles

  return (
    <Card image={{ uri: image }}>
      <CardContent
        title={title}
        artist={artist}
        thumbnail={thumbnail_image}
      />
      <Button
        icon={{ name: 'add-shopping-cart' }}
        backgroundColor='#03A9F4'
        buttonStyle={buttonStyle}
        title='Buy'
        raised
      />
    </Card>
  )
}

const styles = {
  textStyle: {
    marginBottom: 10
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
}
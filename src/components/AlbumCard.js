import React from 'react'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'

const AlbumCard = props => {
  const { title, image } = props.album
  const { buttonStyle, textStyle } = styles

  return (
    <Card title={title} image={{ uri: image }}>
      <Button
        icon={{ name: 'add-shopping-cart' }}
        backgroundColor='#03A9F4'
        buttonStyle={buttonStyle}
        title='Buy'
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

export default AlbumCard
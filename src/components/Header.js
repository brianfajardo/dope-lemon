import React from 'react'
import { Text, View } from 'react-native'

const Header = props => {
  const { viewStytle, textStyle } = styles

  return (
    <View style={viewStytle}>
      <Text style={textStyle}>{props.text}</Text>
    </View>
  )
}

const styles = {
  viewStytle: {
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
}

export default Header
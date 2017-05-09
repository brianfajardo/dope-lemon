import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { fetchAlbums } from '../actions/index'

class AlbumList extends Component {
  componentWillMount() {
    this.props.fetchAlbums()
  }

  render() {
    return (
      <View>
        <Text>Album list</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.albums
})

export default connect(mapStateToProps, { fetchAlbums })(AlbumList)
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/index'

import AlbumDetail from '../components/AlbumDetail'

class AlbumList extends Component {
  componentWillMount() {
    this.props.fetchAlbums()
  }

  renderAlbums() {
    const { albums } = this.props

    return albums.map(album =>
      <AlbumDetail album={album} key={album.title} />
    )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.albums
})

export default connect(mapStateToProps, { fetchAlbums })(AlbumList)
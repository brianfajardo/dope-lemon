import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { fetchAlbums } from '../actions/index'

import AlbumCard from '../components/AlbumCard'

class AlbumList extends Component {
  componentWillMount() {
    this.props.fetchAlbums()
  }

  renderAlbums() {
    const { albums } = this.props

    return albums.map(album =>
      <AlbumCard album={album} key={album.title} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.albums
})

export default connect(mapStateToProps, { fetchAlbums })(AlbumList)
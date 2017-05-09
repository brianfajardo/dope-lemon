import axios from 'axios'

export const FETCH_ALBUMS = 'FETCH_ALBUMS'

export const fetchAlbums = () => {
  const request = axios.get('https://rallycoding.herokuapp.com/api/music_albums')

  return ({
    type: FETCH_ALBUMS,
    payload: request
  })
}
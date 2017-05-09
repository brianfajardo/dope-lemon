import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'

import Header from './src/components/Header'
import AlbumList from './src/containers/AlbumList'

const store = configureStore()

export default () =>
  <Provider store={store}>
    <View>
      <Header text="Because you ❤️ Taylor Swift" />
      <AlbumList />
    </View>
  </Provider>
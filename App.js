import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'

import Header from './src/components/Header'
import AlbumList from './src/containers/AlbumList'

const store = configureStore()

// flex: 1 expands component to fill the entire
// content area of the device.
// enables full ScrollView

export default App = () =>
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Header text="Because You ❤️ Taylor Swift" />
      <AlbumList />
    </View>
  </Provider>
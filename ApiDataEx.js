import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductListingScreen from './screens/ProductListingScreen'

export default function ApiDataEx() {
  return (
    <View style={styles.container}>
      <Text>ApiDataEx check it new </Text>
      <ProductListingScreen />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
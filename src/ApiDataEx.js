import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect} from 'react'
import ProductListingScreen from '../screens/ProductListingScreen'

// API DATA FETCH PRODUCTS EXAMPLE 

export default function ApiDataEx() {

  return (
    <View style={styles.container}>

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
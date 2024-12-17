import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FontLearn() {
  return (
    <View style={styles.container}>
      <Text style={styles.customFont}>Hello, Cedarville Cursive!</Text>
      <Text style={{fontFamily:"Poppins-Bold"}}>Hello, poppins !</Text>
      <Text style={{fontFamily:"Cuprum-Bold"}}>Hello, Cuprum !</Text>
      <Text style={{fontFamily:"Cuprum-Medium"}}>Hello, Medium Cuprum !</Text>
      <Text style={{fontFamily:"Cuprum-Italic"}}>Hello, Medium Cuprum !</Text>
      <Text style={{fontFamily:"Cuprum-VariableFont_wght" , fontSize: 24}}>Hello, Medium Cuprum !</Text>
      <Text style={{fontFamily:"Italianno-Regular" , fontSize: 24}}>Hello, Italianno Regular !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customFont: {
    fontSize: 24,
    fontFamily: 'CedarvilleCursive-Regular', // Use the font name here
  },
});

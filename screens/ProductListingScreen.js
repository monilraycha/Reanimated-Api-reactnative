import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function ProductListingScreen() {
  const [products, setProducts] = React.useState([]);
  const [loading, isLoading] = React.useState(true);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        setProducts(json);
        isLoading(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
  },
});

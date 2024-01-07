/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Category() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categorias</Text>
      <Text style={styles.uillas}>grafico mais cardes das categorias</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  uillas: {
    fontSize: 20,
    fontWeight: 'bold',
    borderTopColor: 'red',
  },
});

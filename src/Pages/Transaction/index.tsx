/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Transacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transacoes</Text>
      <Text style={styles.text}>card com as listas de todas as trançãoes </Text>
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
});

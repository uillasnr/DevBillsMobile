/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configuracoes</Text>
      <Text style={styles.text}>
        Confi das notificacoes do modo dark e tem que ter a opção de deixar com
        um som de notificacoes e a opcao de tirar o som e a barra de
        noticicaçoes{' '}
      </Text>
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

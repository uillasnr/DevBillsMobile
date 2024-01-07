/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';

export function CustomTabBar() {
  return (
    <View style={styles.container}>
      <Plus name="plus" size={20} color={'#fff'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#00695C',
    shadowColor: 'rgba(0,0,0,1)', // cor da sombra
    shadowOffset: { width: 3, height: 3 }, // deslocamento da sombra
    shadowOpacity: 1, // opacidade da sombra
    shadowRadius: 10, // raio da sombra
    elevation: 3, // esta propriedade é para Android
  },
});

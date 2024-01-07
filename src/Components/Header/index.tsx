/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Theme } from '../../Styles/color';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.userImage} source={{uri: 'URL_DA_SUA_IMAGEM'}} />
        <View>
          <Text style={styles.Text}>Óla,</Text>
          <Text style={styles.Text}>uillas</Text>
        </View>
      </View>
      <FontAwesome name="bell" size={25} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.primary,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  Text: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    fontSize: 12,
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
    backgroundColor: 'white',
  },
});

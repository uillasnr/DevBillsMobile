import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import Header from './src/Components/Header';


export default function App() {
  return (
    <NavigationContainer>
      <Header />
     <StatusBar backgroundColor='#3239548f' barStyle='wihte' />
      <Routes />
    </NavigationContainer>
  );
}

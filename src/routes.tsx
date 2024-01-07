/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Chart from 'react-native-vector-icons/EvilIcons';
import Cog from 'react-native-vector-icons/FontAwesome';

import Home from './Pages/Home';
import Category from './Pages/Categories';
import Transacoes from './Pages/Transaction';
import Config from './Pages/Config';
import Modal from './Pages/Create-Transaction';
import {CustomTabBar} from './Components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          alignItems: 'center',
          backgroundColor: '#323954', // Cor de fundo do Tab Navigator
          borderTopColor: '#323954', // Cor da borda
          borderTopWidth: 8, // Espessura da borda
          shadowColor: '#ffffff',
          shadowOffset: {width: 100, height: 50},
        },
        tabBarActiveTintColor: '#50D5B7',
        tabBarInactiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 8,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign name="piechart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={Modal}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <CustomTabBar />,
        }}
      />

      <Tab.Screen
        name="Transacoes"
        component={Transacoes}
        options={{
          tabBarIcon: ({size, color}) => (
            <Chart name="chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarIcon: ({size, color}) => (
            <Cog name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

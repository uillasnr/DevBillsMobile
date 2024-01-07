/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../Styles/color';
import { InputPicker, MonthsProps } from '../../InputPicker';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<MonthsProps>("Janeiro");

  const handleMonthChange = (value: MonthsProps) => {
    setSelectedMonth(value);
  };

  return (
    <View style={styles.container}>
       <InputPicker selectedValue={selectedMonth} onValueChange={handleMonthChange} />
      <Text style={styles.text}>Pagina Home </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
   /*  justifyContent: 'center',
    alignItems: 'center', */
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Theme.colors.white,
  },
});
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../../Styles/color';

export default function ExpenseForm() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('uillas');
    // Aqui você pode lidar com a submissão dos dados
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie uma transação para seu controle financeiro</Text>
      <TextInput
        style={styles.input}
        placeholder="Selecione uma categoria"
        placeholderTextColor={Theme.colors.dark}
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova transação"
        placeholderTextColor={Theme.colors.dark}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        placeholderTextColor={Theme.colors.dark}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data (dd/mm/aaaa)"
        placeholderTextColor={Theme.colors.dark}
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Criar o gasto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Theme.colors.primary,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Theme.colors.white,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.white,
  },
  buttonContainer: {
    backgroundColor: Theme.colors.success,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

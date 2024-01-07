/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

export type CardProps = {
  id: string;
  label: string;
  value: number;
  color: string;
};

type Props = TouchableOpacityProps & {
  selected: boolean;
  data: CardProps;
};

export function CardTransaction({data, selected, ...rest}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderColor: selected ? data.color : 'transparent'},
      ]}
      {...rest}>
      <View style={[styles.tag, {backgroundColor: data.color}]} />

      <Text style={styles.title}>{data.label}</Text>

      <Text style={styles.amount}>
        {data.value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    overflow: 'hidden',
    borderWidth: 4,
    borderRadius: 8,
  },
  tag: {
    width: 10,
    height: 80,
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  amount: {
    marginRight: 16,
  },
});

import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { Theme } from "../../Styles/color";

export type CardProps = {
  id: string;
  label: string;
  value: number;
  color: string;
  category: CategoryProps;
  type: "expense" | "income"; 
};

type CategoryProps = {
  title: string;
  color: string;
  percentage: string;
};

type Props = TouchableOpacityProps & {
  selected: boolean;
  data: CardProps;
};

export function ListTransaction({ data, selected, ...rest }: Props) {
  const amountTextColor = data.type === "expense" ? Theme.colors.expense : Theme.colors.income;
  
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={[styles.tag, { backgroundColor: data.color }]} />

      <View style={styles.text}>
        <Text style={styles.titleCategory}>{data.category.title}</Text>
        <Text style={styles.title}>{data.label}</Text>
      </View>

      <Text style={[styles.amount, { color: amountTextColor }]}>
        {data.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.primaryDark,
    overflow: "hidden",
    borderWidth: 4,
    borderRadius: 8,
  },
  tag: {
    width: 10,
    height: 80,
    marginRight: 16,
  },
  text: {
    flex: 1,
    padding: 10,
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: Theme.colors.white,
  },
  titleCategory: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 12,
    color: Theme.colors.light,
  },
  amount: {
    marginRight: 16,
    color: Theme.colors.white,
  },
});

import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

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

export function ListTransaction({ data, selected, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: selected ? data.color : "transparent" },
        { backgroundColor: data.color },
      ]}
      {...rest}
    >
      <Text style={styles.title}>{data.label}</Text>

      <Text style={styles.amount}>
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
    marginTop: 10,
    margin:10,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    height: 40,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: "#ffffff",
  },
  amount: {
    color: "#ffffff",
  },
});

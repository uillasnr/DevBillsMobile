import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ScrollView, Text } from "react-native";
import { VictoryPie, VictoryTooltip } from "victory-native";
import { Theme } from "../../Styles/color";
import { EXPENSES } from "../../utils/expenses";
import { CardProps } from "../ListTransaction";
import { InputPicker, MonthsProps } from "../../FilterMonth";
import { ListCategory } from "../ListCategory";
import Balance from "../Balance";
import { CATEGORIES } from "../../utils/category";

export default function CategoriesPieChart() {
  const [data, setData] = useState<CardProps[]>([]);
  const [month, setMonth] = useState<MonthsProps>("Janeiro");
  const [selected, setSelected] = useState("");

  function handleCardOnPress(id: string) {
    setSelected((prev) => (prev === id ? "" : id));
  }

  useEffect(() => {
    setData(CATEGORIES[month]);
  }, [month]);
  return (
    <ScrollView style={styles.container}>
     {/*  <InputPicker onValueChange={setMonth} selectedValue={month} /> */}
      <Balance />
      <Text style={styles.text}>Despesas por categoria</Text>
      <View style={styles.chart}>
        <VictoryPie
          data={data}
          x="label"
          y="value"
          colorScale={data.map((EXPENSES) => EXPENSES.color)}
          innerRadius={65}
          padding={80}
          padAngle={3}
          animate={{
            duration: 1000,
            easing: "bounce",
          }}
          style={{
            labels: {
              fill: "#fff",
              fontSize: 12,
            },
            data: {
              stroke: ({ datum }) =>
                datum.id === selected ? datum.color : "none",
              strokeWidth: 10,
              strokeOpacity: 3,
              fillOpacity: ({ datum }) =>
                datum.id === selected || selected === "" ? 1 : 0.5,
            },
          }}
          labelComponent={
            <VictoryTooltip
              renderInPortal={false}
              flyoutStyle={{
                stroke: 0,
                fill: ({ datum }) => datum.color,
              }}
            />
          }
        />
      </View>

      {CATEGORIES[month].map((item) => (
        <ListCategory
          key={item.id}
          data={item}
          selected={selected === item.id}
          onPress={() => handleCardOnPress(item.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  chart: {
    alignItems: "center",
    top: -60,
    height: 290,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
    color: Theme.colors.white,
  },
});

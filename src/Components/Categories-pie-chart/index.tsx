import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { VictoryPie, VictoryTooltip } from "victory-native";
import { Theme } from "../../Styles/color";
import { EXPENSES } from "../../utils/expenses";
import { CardProps, CardTransaction } from "../CardTransaction";
import { InputPicker, MonthsProps } from "../../InputPicker";
import { ListTransaction } from "../ListTransaction";

export default function CategoriesPieChart() {
  const [data, setData] = useState<CardProps[]>([]);
  const [month, setMonth] = useState<MonthsProps>("Janeiro");
  const [selected, setSelected] = useState("")

  function handleCardOnPress(id: string) {
    setSelected(prev => prev === id ? "" : id);
  }

  useEffect(() => {
    setData(EXPENSES[month]);
  }, [month]);
  return (
    <View style={styles.container}>
      <InputPicker onValueChange={setMonth} selectedValue={month} />

      <View style={styles.chart}>
        <VictoryPie
         data={data} x="label" y="value"
         colorScale={data.map(EXPENSES => EXPENSES.color)}
         innerRadius={80}
         padAngle={3}
         animate={{
          duration: 1000,
          easing: "bounce",
         }}
         style={{
          labels:{
            fill: "#fff",
            fontSize: 12,
          },
          data:{
            stroke: ({datum}) => datum.id === selected ? datum.color : 'none',
            strokeWidth: 10,
            strokeOpacity: 3,
             fillOpacity: ({ datum}) => (datum.id === selected || selected === "") ? 1 : 0.5, 
          }
         }}
         labelComponent={
          <VictoryTooltip renderInPortal={false}
          flyoutStyle={{
            stroke: 0,
            fill:({ datum}) => datum.color
          }} />
         }
         />
      </View>

      
      <FlatList
        data={EXPENSES[month]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListTransaction data={item} selected={false} onPress={() => handleCardOnPress(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    padding: 10,
  },
  chart: {
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: Theme.colors.white,
  },
});

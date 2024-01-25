import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Theme } from "../../Styles/color";
import { MONTHS } from "../../utils/months";

type SelectMonthProps = {
  onMonthChange: (newMonthIndex: number) => void;
};

const SelectMonth: React.FC<SelectMonthProps> = ({ onMonthChange }) => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentMonthLabel, setCurrentMonthLabel] = useState(MONTHS[0].label);

  useEffect(() => {
    setCurrentMonthLabel(MONTHS[currentMonthIndex].label);
  }, [currentMonthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - 1, 0);
      onMonthChange(newIndex);
      return newIndex;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + 1, MONTHS.length - 1);
      onMonthChange(newIndex);
      return newIndex;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevMonth}>
        <Icon name="chevron-left" size={35} color="#ffffff" />
      </TouchableOpacity>

      <View style={styles.constant}>
        <Text style={styles.text}>{currentMonthLabel}</Text>
      </View>

      <TouchableOpacity onPress={handleNextMonth}>
        <Icon name="chevron-right" size={35} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.success,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 65,
    width: "100%",
  },
  constant: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    width: 80,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Theme.colors.white,
  },
});

export default SelectMonth;

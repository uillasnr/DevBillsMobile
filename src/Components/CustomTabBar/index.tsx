import React, { useState } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import  Feather from "react-native-vector-icons/Feather";
import { Theme } from "../../Styles/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";


export function CustomTabBar() {
  const [modeValue, setModeValue] = useState(0);
  const mode = useState(new Animated.Value(modeValue))[0];
  const buttonSize = useState(new Animated.Value(1))[0];
  const navigation: NavigationProp<any> = useNavigation();

  // Function to reset the buttons to their initial state
  const resetButtons = () => {
    Animated.timing(buttonSize, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(mode, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setModeValue(0);
  };

  function ExpenseNavigation(): void {
    resetButtons(); // Reset buttons before navigation
    navigation.navigate('CreateTransaction', { type: "expense" });
  }

  function IncomeNavigation(): void {
    resetButtons(); 
    navigation.navigate('CreateTransaction', { type: "income" });
  }
  function TransNavigation(): void {
    resetButtons(); 
    navigation.navigate('Transações');
  }

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.90,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: false
      }),
      Animated.timing(mode, {
        toValue: modeValue === 0 ? 1 : 0,
        useNativeDriver: false
      })
    ]).start();
  
    setModeValue(modeValue === 1 ? 0 : 1); 
  };
  

    const thermometerX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -100]
    });

    const thermometerY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, -100]
    });

    const timeX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -24]
    });

    const timeY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, -150]
    });

    const pulseX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, 50]
    });

    const pulseY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, -100]
    });

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const sizeStyle = {
        transform: [{ scale: buttonSize }]
    };

  return (
    <View style={styles.container}>
      
      <Animated.View style={[styles.circle, { position: "absolute", left: thermometerX, top: thermometerY, backgroundColor:Theme.colors.primaryDark}]}>
        <TouchableOpacity onPress={ExpenseNavigation}>
          <Feather name="trending-down" size={25} color={Theme.colors.expense} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, {   position: "absolute", left: timeX, top: timeY , backgroundColor:Theme.colors.primaryDark}]}>
        <TouchableOpacity  onPress={TransNavigation}>
          <Icon name="retweet" size={25} color="#00a2ff" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, { position: "absolute", left: pulseX, top: pulseY, backgroundColor:Theme.colors.primaryDark}]}>
      <TouchableOpacity onPress={IncomeNavigation}>
          <Feather name="trending-up" size={25} color={Theme.colors.iconUp} />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.circle}
        onPress={handlePress}
        activeOpacity={0.90}
      >
        <Animated.View style={[ sizeStyle]}> 
        <View style={styles.hexagon}>
          <View style={styles.hexagonBefore} />
          <View style={styles.hexagonAfter} />
          <View style={styles.hexagonInner}>
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Icon name="plus" size={25} color="#FFFF" />
            </Animated.View>
          </View>
        </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  circle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  hexagon: {
    width: 70,
    height: 40,
    backgroundColor: Theme.colors.success,
    marginBottom: 20,
    position: "relative",
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  hexagonInner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  hexagonBefore: {
    position: "absolute",
    top: -20,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 35,
    borderLeftColor: "transparent",
    borderRightWidth: 35,
    borderRightColor: "transparent",
    borderBottomWidth: 20,
    borderBottomColor: Theme.colors.success,
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -20,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 35,
    borderLeftColor: "transparent",
    borderRightWidth: 35,
    borderRightColor: "transparent",
    borderTopWidth: 20,
    borderTopColor: Theme.colors.success,
  },
});

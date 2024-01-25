import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Theme } from "../../Styles/color";

type DetailsTransactionProps = {
  data: {
    id: string;
    label: string;
    value: number;
    category: {
      title: string;
      color: string;
      percentage: string;
    };
    type: "expense" | "income";
  };
  onClose: () => void;
};

export function DetailsTransaction({ data }: DetailsTransactionProps) {
  const amountTextColor =
    data.type === "expense" ? Theme.colors.expense : Theme.colors.income;

  function Details() {
    console.log("uillas teste", Details);
  }

  return (
    <View style={styles.container}>
      <View style={styles.Content}>
        <Text style={styles.Title}>Detalhes desta transação</Text>

        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <View style={styles.containerItem}>
              <View style={styles.containerText}>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.text}>{data.label}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="file-text" size={20} color={Theme.colors.light} />
              </View>
            </View>

            <View style={styles.containerItem}>
              <View style={styles.containerText}>
                <Text style={styles.label}>Categoria</Text>
                <Text style={styles.text}>{data.category.title}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="tags" size={20} color={Theme.colors.light} />
              </View>
            </View>

            <View style={styles.containerItem}>
              <View style={styles.containerText}>
                <Text style={styles.label}>Observação</Text>
                <Text style={styles.text}>Teste teste</Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="pencil" size={20} color={Theme.colors.light} />
              </View>
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.containerItem}>
              <View style={styles.containerText}>
                <Text style={styles.label}>Valor</Text>
                <Text style={[styles.text, { color: amountTextColor }]}>
                  R$ {data.value}
                </Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="money" size={20} color={Theme.colors.light} />
              </View>
            </View>

            <View style={styles.containerItem}>
              <View style={styles.containerText}>
                <Text style={styles.label}>Data</Text>
                <Text style={styles.text}>10/02/2024</Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="calendar" size={20} color={Theme.colors.light} />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.editButton, { backgroundColor: amountTextColor }]}
          onPress={Details}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Content: {
    backgroundColor: Theme.colors.primaryDark,
    padding: 20,
    borderRadius: 30,
    width: "100%",
    height: "50%",
    marginTop: 430,
  },
  Title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: Theme.colors.white,
    marginBottom: 30,
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
  editButton: {
    backgroundColor: Theme.colors.expense,
    borderRadius: 30,
    textAlign: "center",
    padding: 10,
    height: 40,
    marginTop: 20,
  },
  buttonText: {
    color: Theme.colors.white,
    textAlign: "center",
  },
  label: {
    height: 50,
    fontSize: 14,
    paddingLeft: 50,
    color: Theme.colors.white,
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  containerText: {
    height: 40,
  },
  text: {
    fontSize: 12,
    paddingLeft: 50,
    color: Theme.colors.light,
  },
  containerItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    marginBottom: 15,
  },
});

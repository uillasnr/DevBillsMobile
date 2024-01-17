import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Theme } from "../../Styles/color";
import { CategoriesModal } from "../../Components/CategoriesModal";

export default function CreateNewTransaction() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [observations, setObservations] = useState<string>("");
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const selectCategory = (category: { id: number, name: string, icon: string, color: string }) => {
    setSelectedCategory(category.name);
    console.log("Selected category", category);
    closeModal();
  };
  
  

  const handleEnviarPress = async () => {
    try {
      const apiUrl = "SUA_URL_DA_API";

      const requestBody = {
        value,
        date,
        description,
        category: selectedCategory,
        observations,
      };

      console.log("Dados a serem enviados:", requestBody);

      
    } catch (error) {
      console.error("Erro durante a requisição para a API:");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.value}>
        <Text style={styles.textValue}>Valor da despesa</Text>
        <View>
          <TextInput
            placeholder="R$ 3.000,00"
            placeholderTextColor={Theme.colors.light}
            style={styles.InputValue}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.ScollContainer}>
          <View style={styles.inputContainer}>
            <Icon name="calendar" size={20} color={Theme.colors.light} />
            <TextInput
              style={styles.InputStyle}
              placeholder="10/01/2024"
              placeholderTextColor={Theme.colors.light}
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="pencil" size={20} color={Theme.colors.light} />
            <TextInput
              style={styles.InputStyle}
              placeholder="Descrição"
              placeholderTextColor={Theme.colors.light}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.categoryButton} onPress={openModal}>
              <Icon name="tags" size={20} color={Theme.colors.light} />

              <TextInput
                style={styles.InputStyle}
                placeholder="Categoria"
                placeholderTextColor={Theme.colors.light}
                editable={false}
                value={selectedCategory}
              />
            </TouchableOpacity>
            <Icon
             style={styles.iconAbsoluteContainer}
              name="angle-right"
              size={30}
              color={Theme.colors.light}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="comment" size={20} color={Theme.colors.light} />
            <TextInput
              style={styles.InputStyle}
              placeholder="Observações"
              placeholderTextColor={Theme.colors.light}
              value={observations}
              onChangeText={(text) => setObservations(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="comment" size={20} color={Theme.colors.light} />
            <TextInput
              style={styles.InputStyle}
              placeholder="......................."
              placeholderTextColor={Theme.colors.light}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="comment" size={20} color={Theme.colors.light} />
            <TextInput
              style={styles.InputStyle}
              placeholder="...................."
              placeholderTextColor={Theme.colors.light}
            />
          </View>
        </View>

        <View style={styles.absoluteButtonContainer}>
          <TouchableOpacity
            style={styles.enviarButton}
            onPress={handleEnviarPress}
          >
            <Text style={styles.enviarButtonText}>Cria Reseita</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <CategoriesModal
          selectCategory={selectCategory}
          closeModal={closeModal}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  value: {
    padding: 10,
  },
  textValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: Theme.colors.white,
    marginHorizontal: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#ccc",
    marginHorizontal: 10,
    paddingLeft: 10,
  },
  InputValue: {
    height: 50,
    fontSize: 25,
    fontWeight: "bold",
    color: Theme.colors.white,
    marginLeft: 10,
  },
  InputStyle: {
    height: 60,
    fontSize: 16,
    fontWeight: "400",
    color: Theme.colors.white,
    marginLeft: 10,
  },
  ScollContainer: {
    backgroundColor: Theme.colors.primaryDark,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: 600,
  },
  categoryButton: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    
  },
  iconAbsoluteContainer: {
    position: "absolute",
    right: 20,  
    top: 15,   
  },
  absoluteButtonContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  enviarButton: {
    backgroundColor: Theme.colors.success,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    width: 300,
  },
  enviarButtonText: {
    color: Theme.colors.light,
    fontSize: 16,
    fontWeight: "bold",
  },
});

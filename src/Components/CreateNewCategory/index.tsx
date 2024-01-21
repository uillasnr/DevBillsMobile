import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "react-native-vector-icons/MaterialIcons";
import { Theme } from "../../Styles/color";
import ColorSelectorModal from "../ColorSelectorModal";
import IconSelectorModal from "../IconSelectorModal";

interface CreateNewCategoryProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (data: { title: string; color: string; icon: string }) => void;
}

export function CreateNewCategory({
  isVisible,
  onClose,
  onSave,
}: CreateNewCategoryProps) {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("#323954");
  const [selectedIcon, setSelectedIcon] = useState("gear");
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [isIconSelected, setIsIconSelected] = useState(false);

  console.log("teste", iconModalVisible);

  const handleSave = () => {
    onSave({ title, color: selectedColor, icon: selectedIcon });
    setTitle("");
    onClose();
  };

  const handleCancel = () => {
    setTitle("");
    setSelectedColor("#323954");
    setSelectedIcon("gear");
    setColorModalVisible(false);
    setIconModalVisible(false);
    setIsIconSelected(false);
    onClose();
  };

  const handleColorModalClose = (color: string) => {
    setTimeout(() => {
      setColorModalVisible(false);
    }, 500);

    if (color) {
      setSelectedColor(color);
    }
  };

  const handleIconModalClose = (selectedIcon: string) => {
    setTimeout(() => {
      setIconModalVisible(false);
    }, 500);

    if (selectedIcon) {
      setSelectedIcon(selectedIcon);
      setIsIconSelected(true);
    } else {
      setIsIconSelected(false);
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Criar nova Categoria</Text>

          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              placeholderTextColor={Theme.colors.light}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            <View style={styles.iconContainer}>
              <Icon name="file-text" size={24} color={Theme.colors.light} />
            </View>
          </View>

          {/* Cor */}
          <View>
            <View style={styles.containerInputCor}>
              <TextInput
                editable={false}
                style={[
                  styles.inputCor,
                  {
                    backgroundColor: selectedColor,
                    height: 40,
                    width: 80,
                    borderColor: Theme.colors.dark,
                    borderWidth: 2,
                    borderRadius: 20,
                    margin: 8,
                  },
                ]}
                placeholder="Cor"
                placeholderTextColor={Theme.colors.light}
              />
              <View style={styles.iconContainer}>
                <Color name="color-lens" size={24} color={Theme.colors.light} />
              </View>

              <TouchableOpacity
                style={styles.options}
                onPress={() => setColorModalVisible(true)}
              >
                <Text style={styles.labelOptions}>outras...</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Ícone */}
          <View style={styles.containerInputIcon}>
            <View style={styles.iconContainer}>
              <Color name="image" size={24} color={Theme.colors.light} />
            </View>

            <TouchableOpacity
              onPress={() => setIconModalVisible(true)}
            >
              <View>
                {isIconSelected ? (
                  <View style={styles.icon}>
                    <Icon
                      name={selectedIcon}
                      size={20}
                      color={Theme.colors.light}
                    />
                  </View>
                ) : (
                  <Text style={{ color: Theme.colors.light, marginLeft: 25 }}>
                    Ícone
                  </Text>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.options}
              onPress={() => setIconModalVisible(true)}
            >
              <Text style={styles.labelOptions}>outras...</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.cancelButton}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.saveButton}>Concluir</Text>
            </TouchableOpacity>
          </View>
        </View>

     
        <ColorSelectorModal
          isVisible={colorModalVisible}
          onClose={() => setColorModalVisible(false)}
          onSelectColor={handleColorModalClose}
        />

    
        <IconSelectorModal
          isVisible={iconModalVisible}
          onClose={() => setIconModalVisible(false)}
          onSelectIcon={handleIconModalClose}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Theme.colors.primaryDark,
    padding: 20,
    borderRadius: 20,
    width: "95%",
    height: 335,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Theme.colors.light,
    textAlign: "center",
  },
  input: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 14,
    paddingLeft: 50,
    color: Theme.colors.white,
    flex: 1,
  },
  icon: {
    height: 40,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    marginLeft: 10,
    borderColor: Theme.colors.dark,
    borderWidth: 2,
    borderRadius: 20,
  },
  inputCor: {
    height: 60,
    fontSize: 14,
    marginRight: 120,
    textAlign: "center",
    color: Theme.colors.white,
    flex: 1,
  },
  containerInput: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
  },
  containerInputCor: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingLeft: 50,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  containerInputIcon: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingLeft: 50,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    height: 60,
    justifyContent: "space-between",
  },
  iconContainer: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    color: Theme.colors.white,
    backgroundColor: Theme.colors.expense,
    borderColor: Theme.colors.dark,
    borderRadius: 30,
    textAlign: "center",
    padding: 10,
    height: 40,
    width: 160,
  },
  saveButton: {
    color: Theme.colors.white,
    backgroundColor: Theme.colors.success,
    borderRadius: 30,
    textAlign: "center",
    padding: 10,
    height: 40,
    width: 160,
  },
  label: {
    color: Theme.colors.light,
    marginTop: 10,
    marginBottom: 5,
  },
  colorSelector: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  iconSelector: {
    margin: 5,
  },
  options: {
    borderRadius: 30,
    backgroundColor: Theme.colors.dark,
    height: 25,
    width: 80,
    alignItems: "center",
  },
  labelOptions: {
    color: Theme.colors.white,
    alignItems: "center",
    fontSize: 12,
    padding: 3,
  },
});

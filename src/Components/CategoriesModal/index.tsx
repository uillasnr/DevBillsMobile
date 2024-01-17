import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Theme } from "../../Styles/color";
import { CreateNewCategory } from "../CreateNewCategory";
import { CATEGORIESDATA } from "../../utils/NewCategory";

interface CategoriesModalProps {
  selectCategory: (category: Category) => void;
  closeModal: () => void;
}

interface Category {
  id: number; 
  name: string;
  icon: string;
  color: string;
}

const categories: Category[] = CATEGORIESDATA;

export function CategoriesModal({
  selectCategory,
  closeModal,
}: CategoriesModalProps) {
  const [selectedCategories, setSelectedCategories] = useState<Array<boolean>>(
    new Array(categories.length).fill(false)
  );
  const [isNewCategoryModalVisible, setNewCategoryModalVisible] =
    useState(false);

  const handleCategorySelect = (category: Category) => {
    let updatedCategories = [...selectedCategories];
    const index = categories.findIndex((c) => c.id === category.id);
    updatedCategories[index] = !updatedCategories[index];
    setSelectedCategories(updatedCategories);

    // Adicionando um atraso de 500 milissegundos (meio segundo)
    setTimeout(() => {
      selectCategory(category);
    }, 800);
  };

  const handleSaveNewCategory = (data: {
    title: string;
    color: string;
    icon: string;
  }) => {
    // salvar a nova categoria
    console.log("Nova categoria:", data);
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <View style={styles.Header}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Icon name="arrow-left" size={25} color={Theme.colors.light} />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Categorias</Text>
        </View>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => handleCategorySelect(item)}
            >
              <View style={styles.iconTextContainer}>
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: item.color },
                  ]}
                >
                  <Icon name={item.icon} size={18} color={Theme.colors.light} />
                </View>
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>

              <View style={styles.checkboxContainer}>
                {selectedCategories[item.id - 1] ? (
                  <Icon name="check" size={20} color={Theme.colors.success} />
                ) : (
                  <View style={styles.checkBox} />
                )}
              </View>
            </TouchableOpacity>
          )}
        />
        {/* Botão para criar nova categoria */}
        <TouchableOpacity
          style={styles.newCategory}
          onPress={() => setNewCategoryModalVisible(true)}
        >
          <View style={styles.newiconContainer}>
            <Icon name="gear" size={18} color={Theme.colors.light} />
          </View>
          <Text style={styles.categoryText}>Criar Nova Categoria</Text>
        </TouchableOpacity>

        <CreateNewCategory
          isVisible={isNewCategoryModalVisible}
          onClose={() => setNewCategoryModalVisible(false)}
          onSave={handleSaveNewCategory}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: Theme.colors.primaryDark,
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "400",
    color: Theme.colors.light,
    marginEnd: 100,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Theme.colors.light,
    marginLeft: 90,
  },
  Header: {
    flexDirection: "row",
    borderBottomWidth: 3,
    borderColor: Theme.colors.light,
    marginBottom: 30,
  },
  closeButton: {
    paddingRight: 10,
  },
  checkboxContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  checkBox: {
    height: 22,
    width: 22,
    borderWidth: 1,
    borderColor: Theme.colors.light,
    borderRadius: 50,
  },
  iconContainer: {
    marginRight: 10,
    width: 40,
    height: 40,
    backgroundColor: "#a51313",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  newCategory: {
    fontSize: 16,
    fontWeight: "400",
    color: Theme.colors.light,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  newiconContainer: {
    marginRight: 10,
    width: 40,
    height: 40,
    backgroundColor: "#414040",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

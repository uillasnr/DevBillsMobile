
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Theme } from "../../Styles/color";


interface CategoriesModalProps {
  selectCategory: (category: string) => void;
  closeModal: () => void;
}

const categories = ["Food", "Transportation", "Shopping", "Entertainment", "Others"];

export function CategoriesModal({ selectCategory, closeModal }: CategoriesModalProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => {
                selectCategory(item);
              }}
            >
              <Text style={styles.categoryText}>{item}</Text>
             
            </TouchableOpacity>
          )}
        />
        
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Icon name="close" size={25} color={Theme.colors.light} /> 
        </TouchableOpacity>
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
    backgroundColor: Theme.colors.primary,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    height: "50%",
  },
  categoryItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", 
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "800",
    color: Theme.colors.light,
  },
  closeButton: {
    marginTop: 20,
    alignItems: "center",
  },
});

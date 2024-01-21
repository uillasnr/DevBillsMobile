import React from "react";
import { Modal, View, TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Theme } from "../../Styles/color";
import { ICONS } from "../../utils/NewIcons";


interface IconSelectorModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectIcon: (icon: string) => void;
}



const IconSelectorModal: React.FC<IconSelectorModalProps> = ({
  isVisible,
  onClose,
  onSelectIcon,
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.iconModalContainer}>

        <View style={styles.iconModalContent}>
        <Text style={styles.modalTitle}>Icones</Text>
          <FlatList
            data={ICONS}
            numColumns={5}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.iconSelector}
                onPress={() => onSelectIcon(item)}
              >
                <Icon name={item} size={20} color={Theme.colors.light} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  iconModalContainer: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
  },
  iconModalContent: {
    backgroundColor: Theme.colors.primaryDark,
    height: "100%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingLeft: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  iconSelector: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    margin: 5,
    borderRadius: 15,
    height: "100%",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cancelButtonText: {
    textAlign: "center",
    color: "black",
  },
});

export default IconSelectorModal;
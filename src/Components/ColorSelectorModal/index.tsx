import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { COLORCATEGORY } from "../../utils/colorCategory";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";
import { Theme } from "../../Styles/color";

interface ColorSelectorModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectColor: (color: string) => void;
}

const ColorSelectorModal: React.FC<ColorSelectorModalProps> = ({
  isVisible,
  onSelectColor,
}) => {
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);


  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.colorModalContainer}>
        <View style={styles.colorModalContent}>
          <Text style={styles.modalTitle}>Cor</Text>
          <FlatList
            data={COLORCATEGORY}
            numColumns={5}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.colorSelector,
                  {
                    backgroundColor: item,
                    borderColor: item,
                    borderWidth: selectedColor === item ? 4 : 2,
                  },
                ]}
                onPress={() => {
                  onSelectColor(item);
                  setSelectedColor(item);
                }}
              >
                {selectedColor === item && (
                  <Icon
                    name="check"
                    size={25}
                    color="#fff"
                    style={styles.checkIcon}
                  />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  colorModalContainer: {
    flex: 1,
    marginTop: 195,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  colorModalContent: {
    backgroundColor: Theme.colors.primaryDark,
  },
  colorSelector: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 2,
    margin: 15,
    borderRadius: 50,
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
  checkIcon: {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: [{ translateX: 13 }, { translateY: -12 }],
  },
});

export default ColorSelectorModal;

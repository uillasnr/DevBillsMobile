/* eslint-disable prettier/prettier */
import {Picker} from '@react-native-picker/picker';
import {MONTHS} from '../utils/months';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../Styles/color';

export type MonthsProps = 'Janeiro' | 'Fevereiro' | 'Março';

type Props = {
  selectedValue: MonthsProps;
  onValueChange: (value: MonthsProps) => void;
};

export function InputPicker({selectedValue, onValueChange}: Props) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: MonthsProps) => onValueChange(itemValue)}
        style={styles.picker}>
        {MONTHS.map(item => (
          <Picker.Item
            style={styles.ItemPicker}
            key={item.label}
            label={item.label}
            value={item.label}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 230,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden', // Garante que a borda seja exibida corretamente
  },
  picker: {
    backgroundColor: '#FFF',
    height: 50,
    width: 150,
    // marginLeft: 200, // Removi esse estilo para evitar problemas de layout
  },
  ItemPicker: {
    backgroundColor: Theme.colors.white,
  },
});

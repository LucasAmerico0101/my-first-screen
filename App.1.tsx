import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './App';

//função do typescript, o que esta dentro é reaction,

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>BELLA MASSA</Text>
      <TextInput placeholder='Nome' style={styles.textinp}></TextInput>
      <TextInput placeholder='Telefone' style={styles.textinp}></TextInput>
      <TextInput placeholder='Endereço' style={styles.textinp}></TextInput>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>Enviar</TouchableOpacity>
      <Text>Enviar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

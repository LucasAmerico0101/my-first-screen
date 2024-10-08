import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  let [newTask,setNewTask] = React.useState('');

  return (
    <View style={styles.container}>
      {/*<Text style={styles.Text}>BELLA MASSA</Text>
      <TextInput placeholder = 'Nome' style={styles.textinp}></TextInput>
      <TextInput placeholder='Telefone'  style={styles.textinp}></TextInput>
      <TextInput placeholder='Endereço'  style={styles.textinp}></TextInput>*/}
        {/*<TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text>Enviar</Text>
    </TouchableOpacity>*/}
      <Text style={styles.Text}>Lista de tarefas</Text>
      <TextInput  onChangeText={setNewTask} placeholder = 'Tarefa' style={styles.textinp}></TextInput>
      <Text>Items adicionados</Text>
      <Text></Text>
      <Text>{newTask}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22222',
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
  textinp:{
    backgroundColor:'#32CD32',
    width:300,
    borderRadius:7,
    padding:10,
    marginBottom:20,

  },

  Text:{
    marginBottom:15,
    fontSize:20,
    color:'#CD853F',
  
    
  },

  button:{
    backgroundColor:'#DCDCDC',
    padding:15,
    borderRadius:7,
    alignItems:'center',
    marginTop:20,
    width:300,
    
  },
});


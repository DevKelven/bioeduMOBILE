import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CadastrarBancoScreen() {
  return (
    <View style={styles.container}>
   

    <View style={styles.texto}>
      <Text style={{color:"white", fontSize:34, fontWeight:"bold", textAlign:"center"}}>Cadastrar Turmas</Text>
      <Text style={{color:"white", fontSize:20,textAlign:"center"}}>Adicione o link para o banco de dados da turma:</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
      </View>
    </View>
    <View>
        <TouchableOpacity style={styles.botao}>
          <Text style={{textAlign:'center', fontWeight:'bold'}} onPress={() => router.push('/cadastrarfoto')}>Continuar</Text>   
        </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002f6c',
    justifyContent: 'center',
    alignItems:'center',
  },
  texto:{
    flex: 0,
    rowGap:30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 52,
    backgroundColor: 'white',
  },
   input: {
    width:280
  },
   botao: {
    backgroundColor:"white",
    paddingHorizontal:50,
    paddingVertical:20,
    textAlign:'center',
    color: '#002f6c',
    borderRadius:40,

  },
});

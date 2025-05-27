import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CadastrarFotoScreen() {
  return (
    <View style={styles.container}>
   

    <View style={styles.texto}>
      <Text style={{color:"white", fontSize:34, fontWeight:"bold", textAlign:"center"}}>Cadastrar Turmas</Text>
      <Text style={{color:"white", fontSize:20,textAlign:"center"}}>Dê um nome para sua turma</Text>

      
    </View>
    <View>
          <Image
                  source={require('../assets/images/camera.png')}
                  style={styles.image}
                />
      </View>
    <View>
        <TouchableOpacity style={styles.botao}>
          <Text style={{textAlign:'center', fontWeight:'bold'}}>Tirar foto</Text>   
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
   image: {
    height: 120,
    width:90,
    margin:50,
  },
});

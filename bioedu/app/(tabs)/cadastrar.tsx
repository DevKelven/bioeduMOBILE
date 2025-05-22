import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CadastrarScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.texto]}>
          Cadastrar Turmas
        </Text>
      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
  },
  botoes:{
    borderWidth:1,
    borderColor:'grey',
    padding:20,
    paddingHorizontal:100
  },
  icon:{
    width:50
  },
  texto:{
    fontSize:35,
    color:"#002A62",
    marginBottom: 90,
    fontWeight:"bold"
  }
});

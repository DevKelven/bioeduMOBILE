import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Minhas Turmas
        </Text>
      </View>

      <View > 
      <TouchableOpacity style={[styles.botoes]}>     
          <Text>ETEC Dr. Adail Nunes da Silva - 2º ano QUÍMICA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botoes]}>     
          <Text>ETEC Dr. Adail Nunes da Silva - 2º ano QUÍMICA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botoes]}>     
          <Text>ETEC Dr. Adail Nunes da Silva - 2º ano QUÍMICA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botoes]}>     
          <Text>ETEC Dr. Adail Nunes da Silva - 2º ano QUÍMICA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botoes]}>     
          <Text>ETEC Dr. Adail Nunes da Silva - 2º ano QUÍMICA</Text>
      </TouchableOpacity>
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
    borderColor:'black'
  },
  icon:{
    width:50
  }

});

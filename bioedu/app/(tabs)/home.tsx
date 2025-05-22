import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
            {/* <Image
              source={require('./assets/logo.png')} // Substitua pela sua logo
              style={styles.logo}
              resizeMode="contain"
            /> */}
            <Text style={styles.greeting}>Olá, Bea!</Text>
            {/* <Icon name="user-circle" size={30} color="#fff" /> */}
          </View>



      <View>
        <Text style={[styles.texto]}>
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
  },
    header: {
    backgroundColor: '#002f6c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
    greeting: {
    color: '#fff',
    fontSize: 16,
  },
});

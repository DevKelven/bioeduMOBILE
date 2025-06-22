import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
   const turmas = [
    'ETEC Dr. Adail Nunes da Silva - 2º ano QUÍMICA',
    'ETEC Dr. Adail Nunes da Silva - 1º ano ADS',
    'FATEC TAQUARITINGA - 2º semestre S.I.',
    'FATEC TAQUARITINGA - 4º semestre S.I',
    'FATEC TAQUARITINGA - 5º semestre ADS - Tarde',
    'FATEC TAQUARITINGA - 6º semestre ADS - Noite'
  ];
  return (
    <View style={styles.container}>
         {/* Header */}
            <View style={styles.header}>
              <Image source={require('../../assets/images/logo_notext.png')} style={styles.logo} resizeMode="contain" />
            </View>
        <View style={styles.turma}>
          <View style={styles.adicionarturma}>
            <Text style={[styles.texto]}>
              Minhas Turmas
            </Text>
      
              <TouchableOpacity style={styles.adicionar} onPress={() => router.push('/cadastrar')}>
                  <Text style={styles.adicionarText}>Adicionar Turma
                  </Text>
              </TouchableOpacity>
           </View>
          <ScrollView contentContainerStyle={styles.content}>
              {turmas.map((turma, index) => (
                <View key={index} style={styles.item} >
                  <Text style={styles.itemText} onPress={() => router.push('/historicoData')}>{turma}</Text>
                </View>  ))}
          </ScrollView>
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
    fontWeight:"bold",
    marginTop:30
  },
    header: {
    flex:1/10,
    backgroundColor: '#002f6c',
    width:'100%',

    },
    greeting: {
    color: '#fff',
    fontSize: 16,
  },
    logo: {
    width: 50,
    height: 50,
    marginTop:30,
  },
    content:{
    paddingHorizontal: 16,
    marginTop:50
  },
  item: {
  backgroundColor: '#f2f2f2',
  padding: 14,
  marginBottom: 8,
  borderRadius: 6,  
  },
  itemText:{
  fontSize: 15,
  color: '#333'
 },
  turma:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  adicionar:{
    width:80,
    height:80,
    backgroundColor:'#002A62',
    borderRadius:80,
    textAlign:'center',
    marginTop:40
  },
  adicionarText:{
    color:'white',
    textAlign:'center',
    marginTop:25,
  },
  adicionarturma:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:20,
  }
});

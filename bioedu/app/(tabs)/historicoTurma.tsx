import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function historicoTurma() {
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
      <View style={styles.header}>
        
        <View style={styles.userInfo}>
         <Image source={require('../../assets/images/logo_notext.png')} style={styles.logo} resizeMode="contain" />
        
        </View>
      </View>
    <View style={styles.historico}>
      <Text style={styles.title}>Históricos</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {turmas.map((turma, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText} onPress={() => router.push('/historicoData')}>{turma}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
     backgroundColor: '#002f6c',
    justifyContent: 'space-between',
    padding: 16,
    width:'100%',
    height:100,
    position: 'absolute',
    top:0,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  greeting: { color: '#fff', fontSize: 16, marginRight: 8 },
  userIcon: { width: 28, height: 28 },
  title: { fontSize: 35, fontWeight: 'bold', margin: 16 , textAlign:'center', color:"#002A62",},
  content: { paddingHorizontal: 16 },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    marginBottom: 8,
    borderRadius: 6,
    
  },
  itemText: { fontSize: 15, color: '#333' },
  footer: {
    backgroundColor: '#002f6c',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: { color: '#fff', fontSize: 16, marginLeft: 8 },
  addIcon: { width: 22, height: 22 },
    botoes:{
    borderWidth:1,
    borderColor:'grey',
    padding:20,
    paddingHorizontal:100
  },
   logo: { width: 50, height: 50, marginTop:30, },
   historico:{
    marginTop: 150,
   }
});

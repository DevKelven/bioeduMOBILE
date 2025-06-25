// import CheckBox from '@react-native-community/checkbox';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Aluno {
  id: string;
  nome: string;
  presente: boolean;
}

const App = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: '1', nome: 'Kelven', presente: false },
    { id: '2', nome: 'Beatriz', presente: false },
    { id: '3', nome: 'Guilherme', presente: false },
    { id: '4', nome: 'Fellipe', presente: false },
  ]);

  const togglePresenca = (id: string) => {
    const novaLista = alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    );
    setAlunos(novaLista);
  };

  const renderItem = ({ item }: { item: Aluno }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.icon}>👤</Text>
      <Text style={styles.nome}>{item.nome}</Text>
      {/* Botão de Presença/Falta */}
      <TouchableOpacity
        style={[
          styles.presencaButton,
          { backgroundColor: item.presente ? '#4CAF50' : '#F44336' }, 
        ]}
        onPress={() => togglePresenca(item.id)}
      >
        <Text style={styles.presencaButtonText}>
          {item.presente ? 'P' : 'F'} 
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/logo_notext.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.titulo}>Sistemas para Internet{'\n'}4°</Text>
      <FlatList
        data={alunos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity style={[styles.saida]} onPress={() => router.push('/historicoData')}>
        <Text style={[styles.saidaText]}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20, 
    paddingTop: 80, 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002147',
    marginBottom: 40,
    marginTop:40,
    },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
  },
  nome: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  presencaButton: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  presencaButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  botaoContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#002f6c',
    color: '#fff',
    paddingHorizontal: 52,
    paddingVertical: 26,
    borderRadius: 32,
    fontSize: 18,
    position: 'relative',
    bottom: 0,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  header: {
    backgroundColor: '#002f6c',
    flexDirection: 'row',
    alignItems: 'center',
    width: 600,
    position: 'absolute', 
    top: 0,
    left: 0,
    paddingTop: 30, 
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10, 
  },
  saidaText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  },
  saida: {
    borderWidth: 2,
    borderColor: "#002f6c",
    padding: 10,
    backgroundColor: "#002f6c",
    borderRadius: 40,
    width: 120,
    position: "absolute",
    bottom: 30,
    left: '50%', 
    transform: [{ translateX: -40 }], 
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1, 
  },
});

export default App;
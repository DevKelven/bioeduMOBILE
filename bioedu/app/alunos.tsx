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
      {/* <CheckBox
        value={item.presente}
        onValueChange={() => togglePresenca(item.id)}
        tintColors={{ true: '#0f0', false: '#ccc' }}
      /> */}
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
     
              <TouchableOpacity style={[styles.saida]} onPress={() => router.push('/home')}>       
                     <Text  style={[styles.saidaText]}>Voltar</Text> 
                   </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002147',
    marginBottom: 24,
    marginTop:50
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
    position:'relative',
    bottom:0,
  },
   header: {
    flex: 1/5,
    backgroundColor: '#002f6c',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
    logo: {
    width: 50,
    height: 50,
    marginTop:30,
  },
    saidaText:{
    textAlign:"center",
    color:"white",
    fontSize:25,
    fontWeight:"bold"
  },
   saida:{
    flex:0,
    borderWidth:2,
    borderColor:"#002f6c",
    padding:10,
    backgroundColor:"#002f6c",
    borderRadius:40,
    width: 120,
    position: "absolute",
    bottom:30,
    left:130,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center"
  },
});

export default App;
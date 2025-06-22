import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function historicoData() {
  const [modalVisible, setModalVisible] = useState(false);
  const turma = [
    'Kelven',
    'Beatriz',
    'Guilherme',
    'Fellipe',
  ];

  return (
    <View style={styles.container}>

    <View style={{marginTop:50}}>
      <Text style={styles.title}>Sistemas para Internet 4°</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {turma.map((turma, index) => (
          <View key={index} style={styles.item}>
              <View style={styles.icons}>
              <Image source={require('../assets/images/user.png')} style={styles.addIcon} />
            </View>
            <Text style={styles.itemText}>{turma}</Text>
            <View style={styles.icons}>

                <TouchableOpacity style={styles.falta}> </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(true)}>
               <Image source={require('../assets/images/editar.png')} style={styles.addIcon} />
                 <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                      <View style={styles.modal}>
                        <Text>Teste</Text>
                      <TouchableOpacity style={styles.botaoModal} onPress={() => setModalVisible(false)}>
                          <Text style={{color:'white',fontWeight:'bold',}}>
                            Fechar
                          </Text>
                      </TouchableOpacity>
                      <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                  </Modal>
            </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      </View>


         <TouchableOpacity style={[styles.saida]} onPress={() => router.push('/historicoData')}>       
                <Text  style={[styles.saidaText]}>Voltar</Text> 
              </TouchableOpacity>
        

    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
 header: {
    backgroundColor: '#002f6c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingVertical:25,
    marginTop:40
  },
  logo: { width: 40, height: 40 },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  greeting: { color: '#fff', fontSize: 16, marginRight: 8 },
  userIcon: { width: 28, height: 28 },
  title: { fontSize: 35, fontWeight: 'bold', margin: 16 , textAlign:'center', color:"#002A62" },
  content: { paddingHorizontal: 16 },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    marginBottom: 8,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemText: { fontSize: 15, color: '#333' },
  icons: { flexDirection: 'row', gap: 12 },
  icon: { width: 22, height: 22, marginLeft: 10 },
  footer: {
    backgroundColor: '#002f6c',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: { color: '#fff', fontSize: 16, marginLeft: 8 },
  addIcon: { width: 22, height: 22 },
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
  saidaText:{
    textAlign:"center",
    color:"white",
    fontSize:25,
    fontWeight:"bold"
  },
  falta:{
      backgroundColor:'red',
      width:20,
      height:20,
      borderWidth:1,
      borderRadius:80,
      borderColor:'red',
  },
  presença:{
      backgroundColor:'green',
      width:20,
      height:20,
      borderWidth:1,
      borderRadius:80,
      borderColor:'green',
  },
  modal:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  botaoModal:{
    padding:15,
    paddingHorizontal:25,
    backgroundColor:'#002f6c',

  }
});

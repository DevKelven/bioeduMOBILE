import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function historicoData() {
  const datas = [
    '18/03/2025',
    '25/03/2025',
    '01/04/2025',
    '08/04/2025',
    '15/04/2025',
    '22/04/2025'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('../assets/image1.png')} style={styles.logo} resizeMode="contain" /> */}
        <View style={styles.userInfo}>
          {/* <Image source={require('../assets/941beafc-bd53-4c0c-9c3c-9d51b8418cec.png')} style={styles.userIcon} /> */}
        </View>
      </View>

    <View style={{marginTop:50}}>
      <Text style={styles.title}>Históricos</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {datas.map((data, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{data}</Text>
            <View style={styles.icons}>
              <Image source={require('../assets/images/impressora.png')} style={styles.addIcon} />
              <Image source={require('../assets/images/download.png')} style={styles.addIcon} />
            </View>
          </View>
        ))}
      </ScrollView>

      </View>


         <TouchableOpacity style={[styles.saida]} onPress={() => router.push('/historicoTurma')}>       
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
  }
});

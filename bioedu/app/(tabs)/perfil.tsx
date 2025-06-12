import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen: React.FC = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo_notext.png')} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Avatar e Nome */}
    <View style={styles.conteudo}>
      <View style={styles.profileSection}>
        <View style={styles.avatarCircle}>
          {/* <Icon name="user" size={50} color="#000" /> */}


          <TouchableOpacity style={styles.editIcon}>
            {/* <Icon name="edit" size={15} color="#000" /> */}
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Beatriz Silva</Text>
      </View>

      {/* Aba Informações */}
      <View style={styles.tab}>
        <Text style={styles.tabText}>Informações pessoais</Text>
      </View>
    </View>
      {/* Mensagem de status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Não finalizado!!!</Text>
      </View>

      <TouchableOpacity style={[styles.saida]}>       
        <Text onPress={() => router.push('/')} style={[styles.saidaText]}>Sair</Text> 
      </TouchableOpacity>

     
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#002f6c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    width:400,
    height:100,
    position: 'absolute',
    top:0,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#002f6c',
  },
  tab: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  statusContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  statusText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saida:{
    flex:0,
    borderWidth:2,
    borderColor:"red",
    padding:10,
    backgroundColor:"red",
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
   logo: { width: 50, height: 50, marginTop:30, },
   conteudo:{marginTop:50}
});
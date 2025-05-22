import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image
          source={require('./assets/logo.png')} // Substitua pela sua logo
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <Text style={styles.greeting}>Olá, Bea!</Text>
        {/* <Icon name="user-circle" size={30} color="#fff" /> */}
      </View>

      {/* Avatar e Nome */}
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

      {/* Mensagem de status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Não finalizado!!!</Text>
      </View>
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
  },
  logo: {
    width: 30,
    height: 30,
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
});
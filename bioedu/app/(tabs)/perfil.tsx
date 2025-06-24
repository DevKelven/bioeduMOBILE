import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [username, setUsername] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userFullName, setUserFullName] = useState<string>('');
  const [userDOB, setUserDOB] = useState<string>('');
  // const [userProfilePic, setUserProfilePic] = useState<string>(''); // Se você ainda não implementou o upload, pode manter comentado por enquanto

  useEffect(() => {
    if (params) {
      setUsername(params.username as string || '');
      setUserEmail(params.email as string || '');
      setUserFullName(params.nome_completo as string || '');

      const dobFromParams = params.data_nascimento as string;
      if (dobFromParams) {
        const [year, month, day] = dobFromParams.split('-');
        setUserDOB(`${day}/${month}/${year}`);
      } else {
        setUserDOB('');
      }

      // setUserProfilePic(params.foto_perfil as string || ''); // Se você ainda não implementou o upload, pode manter comentado por enquanto
    }
  }, [params]);

  console.log('ProfileScreen: Parâmetros recebidos:', params);
  console.log('ProfileScreen: Username:', username);
  console.log('ProfileScreen: Email:', userEmail);
  console.log('ProfileScreen: Nome Completo:', userFullName);
  console.log('ProfileScreen: Data de Nascimento:', userDOB);
  // console.log('ProfileScreen: URL da Foto de Perfil:', userProfilePic); // Se você ainda não implementou o upload, pode manter comentado por enquanto


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
            {/* Se você tiver implementado userProfilePic, use-o aqui */}
            {/* {userProfilePic ? (
              <Image
                source={{ uri: userProfilePic }}
                style={styles.profileImage}
              />
            ) : (
              <Image
                source={require('../../assets/images/default_avatar.png')}
                style={styles.profileImage}
              />
            )} */}
            {/* Ou um placeholder simples por enquanto */}
            {/* <Image
              source={require('../../assets/images/default_avatar.png')} // Usando um placeholder local por enquanto
              style={styles.profileImage}
            /> */}
            <TouchableOpacity style={styles.editIcon}>
              {/* Ícone para editar o perfil, se houver */}
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{username || 'Usuário'}</Text>
        </View>

        {/* Aba Informações */}
        <View style={styles.tab}>
          <Text style={styles.tabText}>Informações pessoais</Text>
        </View>

        {/* Campos de Informação Detalhada */}
        <View style={styles.infoFieldsContainer}>
          <TouchableOpacity style={styles.opcoes}>
            <Text style={styles.opcoesText}>Nome Completo:</Text>
            <Text>{userFullName || 'Não informado'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcoes}>
            <Text style={styles.opcoesText}>E-mail:</Text>
            <Text>{userEmail || 'Não informado'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcoes}>
            <Text style={styles.opcoesText}>Data de Nascimento:</Text>
            <Text>{userDOB || 'Não informado'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão Sair */}
      {/* CORREÇÃO AQUI: Mova o onPress para o TouchableOpacity */}
      <TouchableOpacity onPress={() => router.push('/')} style={[styles.saida]}>
        <Text style={[styles.saidaText]}>Sair</Text>
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
    flex: 1 / 10,
    backgroundColor: '#002f6c',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'absolute'
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
    overflow: 'hidden', // Importante para cortar a imagem que excede o círculo
  },
  profileImage: { // Estilo para a imagem de perfil
    width: '100%',
    height: '100%',
    borderRadius: 50,
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
  infoFieldsContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    width: '100%',
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
  saida: {
    flex: 0,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    backgroundColor: "red",
    borderRadius: 40,
    width: 120,
    position: "absolute",
    bottom: 30,
    left: 130,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  saidaText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 30,
  },
  conteudo: {
    marginTop: 40
  },
  opcoes: {
    width: '100%',
    borderColor: '#eee',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  opcoesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002f6c',
  }
});
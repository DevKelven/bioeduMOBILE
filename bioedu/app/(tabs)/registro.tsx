import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function cadastro() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />



        <View style={styles.inputContainer}>
    
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite seu Email"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua Senha novamente"
            secureTextEntry
            style={styles.input}
          />
        </View>


        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Já tem uma conta? <Link href={'/'} style={styles.signupLink}>Entre aqui</Link>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#002A62',
    justifyContent: 'center',
  },
  image: {
    height: 190,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 52,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  forgot: {
    textAlign: 'right',
    color: '#888',
    marginBottom: 24,
    marginRight:10,
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#002A62',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  socialText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 25,
  },
  signupLink: {
    color: 'white',
    fontWeight: '600',
    textAlign:"center",
 
  },
});


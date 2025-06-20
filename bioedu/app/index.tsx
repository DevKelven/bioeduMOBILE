import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setErrorMessage('');

    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2/api_bioedu/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Login bem-sucedido!', data.message);
        router.push('/home');
      } else {
        console.log('Login falhou:', data.message);
        setErrorMessage(data.message || 'Usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      setErrorMessage('Erro ao conectar. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu Usuario"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Ainda não possui nossos serviços?
      </Text>
      <Link href={"https://github.com/DevKelven/bioeduMOBILE"} style={styles.signupLink}>Clique aqui</Link>
    </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
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
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 25,
  },
  signupLink: {
    color: 'white',
    fontWeight: '600',
    textAlign: "center",
  },
});
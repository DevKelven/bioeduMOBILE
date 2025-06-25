import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    setErrorMessage('');

    if (!username || !password || !email || !fullName || !dob) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(dob)) {
      setErrorMessage('Formato de data de nascimento inválido. Use AAAA-MM-DD.');
      return;
    }

    try {
      const response = await fetch('http://10.0.0.129/api_bioedu/registro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
          nome_completo: fullName,
          data_nascimento: dob,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Sucesso!', data.message);
        router.push('/');
      } else {
        setErrorMessage(data.message || 'Erro ao registrar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      setErrorMessage('Erro ao conectar. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/biodocentes2.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome de Usuário"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome Completo"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Data de Nascimento (AAAA-MM-DD)"
          style={styles.input}
          value={dob}
          onChangeText={setDob}
          keyboardType="numeric"
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

      <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Já possui uma conta?
      </Text>
      {/* CORREÇÃO AQUI: Envolva "Fazer Login" em <Text> */}
      <Link href={"/"} style={styles.signupLink}><Text>Fazer Login</Text></Link>
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
  registerButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
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
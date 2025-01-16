import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.replace('/home');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/log.svg')} style={styles.image} />
      <Text style={styles.title}>Sign in</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.switchText}>
        Belum punya Akun?{' '}
        <Text style={styles.link} onPress={() => router.push('/SignUpScreen')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    marginTop: 20,
    fontSize: 14,
  },
  link: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

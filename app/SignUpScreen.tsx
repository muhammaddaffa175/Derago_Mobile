import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'expo-router'; // Gunakan useRouter untuk navigasi

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await register(email, password);
      Alert.alert('Success', 'Account created successfully!');
      router.replace('/home'); // Arahkan ke halaman home setelah signup berhasil
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/register.svg')} style={styles.image} />
      <Text style={styles.title}>Sign up</Text>

      {/* Input Name */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      {/* Input Phone */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="No HP"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Button Sign Up */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Link to Login */}
      <Text style={styles.switchText}>
        Sudah punya Akun?{' '}
        <Text style={styles.link} onPress={() => router.push('/LoginScreen')}>
          Sign In
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

export default SignUpScreen;

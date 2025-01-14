import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SignInSignUp: React.FC = () => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);
  const [signInEmail, setSignInEmail] = useState<string>('');
  const [signInPassword, setSignInPassword] = useState<string>('');
  const [signUpName, setSignUpName] = useState<string>('');
  const [signUpPhone, setSignUpPhone] = useState<string>('');
  const [signUpEmail, setSignUpEmail] = useState<string>('');
  const [signUpPassword, setSignUpPassword] = useState<string>('');

  return (
    <View
      style={[
        styles.container,
        isSignUpMode ? styles.signUpModeContainer : null,
      ]}
    >
      {/* Forms Container */}
      <View style={styles.formsContainer}>
        <View style={styles.signInSignUp}>
          {/* Sign In Form */}
          {!isSignUpMode && (
            <View style={styles.form}>
              <Text style={styles.title}>Sign In</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={signInEmail}
                onChangeText={setSignInEmail}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={signInPassword}
                onChangeText={setSignInPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Sign Up Form */}
          {isSignUpMode && (
            <View style={styles.form}>
              <Text style={styles.title}>Sign Up</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={signUpName}
                onChangeText={setSignUpName}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={signUpPhone}
                onChangeText={setSignUpPhone}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={signUpEmail}
                onChangeText={setSignUpEmail}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={signUpPassword}
                onChangeText={setSignUpPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Panels Container */}
      <View style={styles.panelsContainer}>
        {/* Left Panel */}
        {!isSignUpMode && (
          <View style={styles.panel}>
            <View style={styles.content}>
              <Text style={styles.panelTitle}>
                Welcome to DERAGO! New here?
              </Text>
              <Text style={styles.panelText}>Klik Sign Up untuk mendaftar!</Text>
              <TouchableOpacity
                style={styles.transparentButton}
                onPress={() => setIsSignUpMode(true)}
              >
                <Text style={styles.transparentButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../../assets/images/register.svg')}
              style={styles.image}
            />
          </View>
        )}

        {/* Right Panel */}
        {isSignUpMode && (
          <View style={styles.panel}>
            <View style={styles.content}>
              <Text style={styles.panelTitle}>
                Welcome to DERAGO! One of us?
              </Text>
              <Text style={styles.panelText}>Klik Sign In untuk masuk!</Text>
              <TouchableOpacity
                style={styles.transparentButton}
                onPress={() => setIsSignUpMode(false)}
              >
                <Text style={styles.transparentButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../../assets/images/log.svg')}
              style={styles.image}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SignInSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  formsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInSignUp: {
    width: '80%',
  },
  form: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  panelsContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  panel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  panelText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  transparentButton: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  transparentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  signUpModeContainer: {
    backgroundColor: '#f0f0f0',
  },
});

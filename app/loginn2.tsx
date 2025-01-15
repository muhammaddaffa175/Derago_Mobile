import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";



const Login: React.FC = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUpClick = () => setIsSignUpMode(true);
  const handleSignInClick = () => setIsSignUpMode(false);

  const handleLogin = () => {
    // Contoh validasi login
    if (email === "test@derago.com" && password === "password") {
      router.push("/home"); // Navigasi ke halaman home
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <View style={[styles.container, isSignUpMode && styles.signUpMode]}>
      <View style={styles.formsContainer}>
        <View style={styles.signInForm}>
          {!isSignUpMode && (
            <>
              <Text style={styles.title}>Sign In</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.signUpForm}>
          {isSignUpMode && (
            <>
              <Text style={styles.title}>Sign Up</Text>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="No HP" />
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <View style={styles.panelsContainer}>
        <View style={styles.panel}>
          <Text style={styles.panelText}>
            {isSignUpMode ? "Already have an account?" : "New here?"}
          </Text>
          <TouchableOpacity
            style={styles.transparentButton}
            onPress={isSignUpMode ? handleSignInClick : handleSignUpClick}
          >
            <Text style={styles.buttonText}>
              {isSignUpMode ? "Sign In" : "Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  signUpMode: {
    backgroundColor: "#f0f0f0",
  },
  formsContainer: {
    width: "80%",
  },
  signInForm: {
    display: "flex",
    alignItems: "center",
  },
  signUpForm: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  panelsContainer: {
    marginTop: 20,
  },
  panel: {
    alignItems: "center",
  },
  panelText: {
    marginBottom: 10,
    fontSize: 16,
  },
  transparentButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
});

export default Login;

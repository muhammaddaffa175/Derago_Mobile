import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const router = useRouter();

  // Fungsi Logout dengan konfirmasi
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Apakah Anda yakin ingin logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => router.replace("/") },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      {/* Status Bar Visual */}
      <View style={styles.statusBar} />
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.background}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DERAGO</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Konten Utama */}
        <View style={styles.container}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Derago!</Text>
          <Text style={styles.subtitle}>Selamat Datang di DERAGO!</Text>
          <Text style={styles.description}>
            Website ini menyediakan penjelasan materi, alat bantu hitung, dan
            latihan soal terkait deret aritmatika dan geometri.
          </Text>

          {/* Button Materi */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/materi")}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="book-outline" size={24} color="#000" />
              <Text style={styles.buttonText}>Materi</Text>
            </View>
          </TouchableOpacity>

          {/* Button Tools */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/tools")}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="construct-outline" size={24} color="#000" />
              <Text style={styles.buttonText}>Tools</Text>
            </View>
          </TouchableOpacity>

          {/* Button Latihan Soal */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/latihan-soal")}
          >
            <View style={styles.buttonContent}>
              <Ionicons name="clipboard-outline" size={24} color="#000" />
              <Text style={styles.buttonText}>Latihan Soal</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  statusBar: {
    height:
      Platform.OS === "android" && StatusBar.currentHeight
        ? StatusBar.currentHeight - 12
        : 0,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 10,
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

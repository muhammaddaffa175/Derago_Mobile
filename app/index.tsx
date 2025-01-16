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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // Tambahkan untuk ikon
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.statusBar} />
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <LinearGradient
          colors={["#000", "#000", "#000"]}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>DERAGO</Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => router.push("/")}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.headerDivider} />
        <View style={styles.container}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Derago!</Text>
          <Text style={styles.subtitle}>Selamat Datang di DERAGO!</Text>
          <Text style={styles.description}>
            Derago! menyediakan penjelasan materi, alat bantu hitung, dan
            latihan soal terkait deret aritmatika dan geometri.
          </Text>

          {/* Tombol Materi */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/materi")}
          >
            <FontAwesome name="book" size={30} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>Materi</Text>
          </TouchableOpacity>

          {/* Tombol Tools */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/tools")}
          >
            <FontAwesome name="wrench" size={30} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>Tools</Text>
          </TouchableOpacity>

          {/* Tombol Latihan Soal */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/latihan-soal")}
          >
            <FontAwesome
              name="clipboard" size={30} color="#000" style={styles.icon}
            />
            <Text style={styles.buttonText}>Latihan Soal</Text>
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
    height: Platform.OS === "android" && StatusBar.currentHeight
      ? StatusBar.currentHeight - 12
      : 0,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  headerDivider: {
    width: "100%",
    height: 2,
    backgroundColor: "#444",
    opacity: 0.8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 230,
    height: 170,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Poppins-Bold",
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    fontFamily: "Poppins-Light",
    marginBottom: 25,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#ccc",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginRight: 10, // Jarak antara ikon dan teks
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
});

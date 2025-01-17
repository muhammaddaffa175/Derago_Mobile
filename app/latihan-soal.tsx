import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Animated, } from "react-native";
import { useRouter } from "expo-router"; // Tambahkan ini
import { Ionicons } from "@expo/vector-icons";


export default function LatihanSoal() {
      const router = useRouter();

    const [menuVisible, setMenuVisible] = useState(false);
    const slideAnim = useState(new Animated.Value(-300))[0]; // Sidebar animasi  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
      Animated.timing(slideAnim, {
        toValue: menuVisible ? -300 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

  return (
    <ScrollView style={styles.container}>
        {/* Navbar */}
      <View style={styles.navbar}>
        <Image source={require("../assets/images/logo.png")} style={styles.navLogo} />
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={30} color="#DAA520" />
        </TouchableOpacity>
      </View>

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { right: slideAnim }]}>
        <TouchableOpacity onPress={toggleMenu} style={styles.closeMenu}>
          <Ionicons name="close" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/home");
            toggleMenu();
          }}
        >
          <Ionicons name="home-outline" size={20} color="#DAA520" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/materi");
            toggleMenu();
          }}
        >
          <Ionicons name="book-outline" size={20} color="#DAA520" />
          <Text style={styles.menuText}>Materi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/tools");
            toggleMenu();
          }}
        >
          <Ionicons name="construct-outline" size={20} color="#DAA520" />
          <Text style={styles.menuText}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            router.push("/latihan-soal");
            toggleMenu();
          }}
        >
          <Ionicons name="clipboard-outline" size={20} color="#DAA520" />
          <Text style={styles.menuText}>Latihan Soal</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Easy Quiz Section */}
      <View style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Easy Quiz</Text>
        <Text style={styles.quizDescription}>
          Ayo uji pemahaman kamu dengan mengerjakan soal Quiz ini.
        </Text>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => router.push("/latsoleasy")} // Navigasi ke halaman latsoleasy
        >
          <Text style={styles.quizButtonText}>Mulai Easy Quiz</Text>
        </TouchableOpacity>
      </View>

      {/* Extreme Quiz Section */}
      <View style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Extreme Quiz</Text>
        <Text style={styles.quizDescription}>
          Sudah merasa jago? Ayo kerjakan soal Quiz ini dengan level kesulitan yang lebih tinggi.
        </Text>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => router.push("/latsolextreme")} // Navigasi ke halaman latsoleasy
        >
          <Text style={styles.quizButtonText}>Mulai Extreme Quiz</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 16,
    zIndex: 10,
  },
  navLogo: {
    width: 55,
    height: 55,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "#333",
    paddingTop: 60,
    paddingHorizontal: 16,
    zIndex: 20,
  },
  closeMenu: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  menuText: {
    marginLeft: 10,
    color: "#DAA520",
    fontSize: 16,
    fontWeight: "bold",
  },
  quizContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  quizDescription: {
    fontSize: 14,
    color: "#000",
    marginBottom: 16,
  },
  quizButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  quizButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

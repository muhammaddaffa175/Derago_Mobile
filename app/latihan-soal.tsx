import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function LatihanSoal() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>LATIHAN</Text>
      </View>

      {/* Easy Quiz Section */}
      <View style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Easy Quiz</Text>
        <Text style={styles.quizDescription}>
          Ayo uji pemahaman kamu dengan mengerjakan soal Quiz ini.
        </Text>
        <TouchableOpacity style={styles.quizButton}>
          <Text style={styles.quizButtonText}>Mulai Easy Quiz</Text>
        </TouchableOpacity>
      </View>

      {/* Extreme Quiz Section */}
      <View style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Extreme Quiz</Text>
        <Text style={styles.quizDescription}>
          Sudah merasa jago? Ayo kerjakan soal Quiz ini dengan level kesulitan yang lebih tinggi.
        </Text>
        <TouchableOpacity style={styles.quizButton}>
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
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
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

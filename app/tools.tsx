import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from "react-native";

export default function Tools() {
  const [arithmeticResult, setArithmeticResult] = useState<number | null>(null);
  const [geometricResult, setGeometricResult] = useState<number | null>(null);

  const [arithmeticInputs, setArithmeticInputs] = useState({ a: "", d: "", n: "" });
  const [geometricInputs, setGeometricInputs] = useState({ a: "", r: "", n: "" });

  const calculateArithmetic = () => {
    const { a, d, n } = arithmeticInputs;
    if (a && d && n) {
      const result = parseFloat(a) + (parseInt(n) - 1) * parseFloat(d);
      setArithmeticResult(result);
    }
  };

  const calculateGeometric = () => {
    const { a, r, n } = geometricInputs;
    if (a && r && n) {
      const result = parseFloat(a) * Math.pow(parseFloat(r), parseInt(n) - 1);
      setGeometricResult(result);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>TOOLS</Text>
      </View>

      <Text style={styles.title}>Tools: Hitung Suku ke-n</Text>

      {/* Arithmetic Sequence */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hitung Suku ke-n Deret Aritmatika</Text>

        <Text>Suku Pertama (a):</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Suku Pertama"
          keyboardType="numeric"
          onChangeText={(value) => setArithmeticInputs({ ...arithmeticInputs, a: value })}
        />

        <Text>Selisih (d):</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Selisih"
          keyboardType="numeric"
          onChangeText={(value) => setArithmeticInputs({ ...arithmeticInputs, d: value })}
        />

        <Text>Nomor Suku (n):</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nomor Suku"
          keyboardType="numeric"
          onChangeText={(value) => setArithmeticInputs({ ...arithmeticInputs, n: value })}
        />

        <Button title="Hitung" onPress={calculateArithmetic} />
        <Text>Hasil Suku ke-n: {arithmeticResult !== null ? arithmeticResult : ""}</Text>
      </View>

      {/* Geometric Sequence */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hitung Suku ke-n Deret Geometri</Text>

        <Text>Suku Pertama (a):</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Suku Pertama"
          keyboardType="numeric"
          onChangeText={(value) => setGeometricInputs({ ...geometricInputs, a: value })}
        />

        <Text>Rasio (r):</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Rasio"
          keyboardType="numeric"
          onChangeText={(value) => setGeometricInputs({ ...geometricInputs, r: value })}
        />

        <Text>Nomor Suku (n):</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nomor Suku"
          keyboardType="numeric"
          onChangeText={(value) => setGeometricInputs({ ...geometricInputs, n: value })}
        />

        <Button title="Hitung" onPress={calculateGeometric} />
        <Text>Hasil Suku ke-n: {geometricResult !== null ? geometricResult : ""}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#000",
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
});

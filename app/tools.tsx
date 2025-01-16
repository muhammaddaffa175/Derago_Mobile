import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Tools() {
  const [arithmeticResult, setArithmeticResult] = useState<number | null>(null);
  const [geometricResult, setGeometricResult] = useState<number | null>(null);

  const [arithmeticInputs, setArithmeticInputs] = useState({ a: "", d: "", n: "" });
  const [geometricInputs, setGeometricInputs] = useState({ a: "", r: "", n: "" });

  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(-300))[0]; // Sidebar animasi
  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(slideAnim, {
      toValue: menuVisible ? -300 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

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
    <View style={styles.container}>

      {/* Konten Utama */}
      <ScrollView contentContainerStyle={styles.content}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    position: "absolute",
    top: 50,
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
  content: {
    flexGrow: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "center",
    color: "#000",
    paddingTop: 55,
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

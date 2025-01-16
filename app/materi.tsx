import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Materi() {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(-300))[0]; // Animasi sidebar
  const router = useRouter();

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
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.navLogo}
        />
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

      {/* Deret Aritmatika */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deret Aritmatika</Text>

        <YoutubePlayer
          height={200}
          play={false}
          videoId={"XZJdyPkCxuE"} // Ganti dengan ID video yang sesuai
        />

        <Text style={styles.subsectionTitle}>Definisi</Text>
        <Text style={styles.text}>
        Deret Aritmatika adalah suatu barisan bilangan yang memiliki perbedaan 
        tetap atau konstan antara satu suku dengan suku berikutnya. Suku-suku dalam
        deret ini diperoleh dengan menambahkan suatu nilai tetap, yang disebut "beda,"
        pada suku sebelumnya. Misalnya, dalam deret 2, 5, 8, 11, 14, dan seterusnya, 
        perbedaan antara setiap suku adalah 3. Deret ini sering digunakan untuk 
        menggambarkan pertumbuhan linear atau perubahan yang berlangsung secara konsisten, 
        seperti kenaikan suhu setiap jam atau jumlah langkah dalam suatu pola berulang. 
        Silakan simak video diatas untuk mempertajam pemahaman Anda!
        </Text>

        <Text style={styles.subsectionTitle}>Rangkuman</Text>
        <Text style={styles.text}>
          Deret Aritmatika adalah deret bilangan yang memiliki selisih tetap
          antara dua suku berurutan. Rumus umum untuk mencari suku ke-n dari
          deret aritmatika adalah:
        </Text>
        <Text style={styles.formula}>Un = a + (n - 1) * d</Text>
        <Text style={styles.text}>Keterangan:</Text>
        <Text style={styles.text}>- Un = suku ke-n</Text>
        <Text style={styles.text}>- a = suku pertama</Text>
        <Text style={styles.text}>- n = nomor suku yang dicari</Text>
        <Text style={styles.text}>- d = selisih antar suku</Text>
      </View>

      {/* Deret Geometri */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deret Geometri</Text>

        <YoutubePlayer
          height={200}
          play={false}
          videoId={"zRKZ0-kOUZM"} // Ganti dengan ID video yang sesuai
        />

        <Text style={styles.subsectionTitle}>Definisi</Text>
        <Text style={styles.text}>
        Deret Geometri adalah barisan bilangan yang setiap sukunya diperoleh dengan 
        mengalikan suku sebelumnya dengan suatu nilai tetap yang disebut "rasio." 
        Deret ini memiliki pola penggandaan yang konsisten, sehingga nilai dari suku-suku 
        dalam deret ini berubah secara eksponensial. Sebagai contoh, deret 3, 6, 12, 24, 48, 
        dan seterusnya memiliki rasio 2, di mana setiap suku diperoleh dengan mengalikan suku 
        sebelumnya dengan 2. Deret geometri sering digunakan untuk menggambarkan proses yang 
        melibatkan pertumbuhan atau penyusutan eksponensial, seperti bunga majemuk dalam investasi 
        atau pertumbuhan populasi. Silakan simak video diatas untuk mempertajam pemahaman Anda!
        </Text>

        <Text style={styles.subsectionTitle}>Rangkuman</Text>
        <Text style={styles.text}>
          Deret Geometri adalah deret bilangan yang memiliki rasio tetap antara
          dua suku berurutan. Rumus umum untuk mencari suku ke-n dari deret
          geometri adalah:
        </Text>
        <Text style={styles.formula}>Un = a * r^(n - 1)</Text>
        <Text style={styles.text}>Keterangan:</Text>
        <Text style={styles.text}>- Un = suku ke-n</Text>
        <Text style={styles.text}>- a = suku pertama</Text>
        <Text style={styles.text}>- n = nomor suku yang dicari</Text>
        <Text style={styles.text}>- r = rasio antar suku</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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
    borderBottomWidth: 1,
    borderBottomColor: "#444",
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
    marginTop: 70,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  section: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
    textAlign: "center", // Menjadikan teks berada di tengah secara horizontal
    marginTop: 16, // Tambahkan margin atas
    paddingTop: 50,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#555",
  },
  text: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  formula: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
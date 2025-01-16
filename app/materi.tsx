import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Materi() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>MATERI</Text>
      </View>

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
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#000",
  },
  text: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
    marginBottom: 8,
  },
  formula: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 8,
  },
});

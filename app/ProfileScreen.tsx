import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const db = getDatabase();
  const router = useRouter();

    const [menuVisible, setMenuVisible] = useState(false);
    const slideAnim = useState(new Animated.Value(-300))[0]; // Animasi sidebar
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
      Animated.timing(slideAnim, {
        toValue: menuVisible ? -300 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Apakah Anda yakin ingin logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          onPress: async () => {
            await signOut(auth);
            router.replace("/"); // Kembali ke halaman login
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No user data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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

      <View style={styles.header}>
        <Image
          source={require("../assets/images/DERAGO_PUTIH.png")}
          style={styles.avatar}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>{userData.name}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{userData.email}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Nomor Telepon</Text>
          <Text style={styles.value}>{userData.nohp}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Last Login</Text>
          <Text style={styles.value}>
            {new Date(userData.last_login).toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Tombol Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText} onPress={() => router.push("/LoginScreen")}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

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

  header: {
    backgroundColor: "#000",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#000",
    borderWidth: 3,
    borderColor: "#333",
  },
  infoContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#333",
  },
  label: {
    fontSize: 16,
    color: "#888",
    fontWeight: "bold",
  },
  value: {
    fontSize: 18,
    color: "#000",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { auth } from "../firebaseConfig";

type UserType = {
  uid: string;
  email: string | null;
  name?: string;
  phone?: string;
  last_login?: string;
  highScore?: number;
};

type AuthContextType = {
  user: UserType | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, phone: string) => Promise<void>;
  logout: () => Promise<void>;
  updateHighScore: (newHighScore: number) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const db = getDatabase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = ref(db, `users/${firebaseUser.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUser({ uid: firebaseUser.uid, email: firebaseUser.email, ...snapshot.val() });
        } else {
          setUser({ uid: firebaseUser.uid, email: firebaseUser.email });
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [db]);

  const login = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userRef = ref(db, `users/${result.user.uid}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      setUser({ uid: result.user.uid, email: result.user.email, ...snapshot.val() });
    } else {
      setUser({ uid: result.user.uid, email: result.user.email });
    }

    // Perbarui waktu login terakhir
    await set(userRef, { ...snapshot.val(), last_login: new Date().toISOString() });
  };

  const register = async (email: string, password: string, name: string, phone: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const userRef = ref(db, `users/${result.user.uid}`);
    const initialData = {
        name,
        nohp: phone, // Pastikan konsisten dengan struktur di ProfileScreen
        last_login: new Date().toISOString(),
        highScore: 0,
    };

    await set(userRef, { ...initialData, email: result.user.email });
    setUser({ uid: result.user.uid, email: result.user.email, ...initialData });
};


  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateHighScore = async (newHighScore: number) => {
    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const currentData = snapshot.val();
        const currentHighScore = currentData.highScore || 0;

        if (newHighScore > currentHighScore) {
          const updatedData = { ...currentData, highScore: newHighScore };
          await set(userRef, updatedData);
          setUser({ ...user, highScore: newHighScore });
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateHighScore }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

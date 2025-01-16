import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

// Array untuk menyimpan soal dan jawaban
const soalList = [
  { soal: "Suku pertama deret aritmatika adalah 3 dan selisihnya adalah 5. Berapa suku ke-4?", jawaban: 18 },
  { soal: "Suku pertama deret geometri adalah 2 dan rasio adalah 3. Berapa suku ke-3?", jawaban: 18 },
  { soal: "Apa suku ke-5 dari deret aritmatika dengan suku pertama 10 dan selisih 2?", jawaban: 18 },
  { soal: "Suku pertama deret aritmatika adalah 7 dan selisihnya adalah 4. Berapa suku ke-6?", jawaban: 27 },
  { soal: "Suku pertama deret geometri adalah 5 dan rasionya adalah 2. Berapa suku ke-4?", jawaban: 40 },
  { soal: "Deret aritmatika memiliki suku pertama 8 dan selisih 3. Berapa jumlah 5 suku pertamanya?", jawaban: 35 },
  { soal: "Suku pertama deret geometri adalah 3 dan rasionya 4. Berapa suku ke-3?", jawaban: 48 },
  { soal: "Deret aritmatika memiliki suku pertama 4 dan selisih 5. Berapa suku ke-8?", jawaban: 39 },
  { soal: "Suku pertama deret geometri adalah 2 dan rasionya 5. Berapa suku ke-4?", jawaban: 250 },
  { soal: "Deret aritmatika dengan suku pertama 15 dan selisih -3. Berapa suku ke-6?", jawaban: 0 },
  { soal: "Deret geometri memiliki suku pertama 2 dan rasionya 3. Berapa suku ke-5?", jawaban: 162 },
  { soal: "Jumlah 7 suku pertama dari deret aritmatika dengan suku pertama 3 dan selisih 2 adalah?", jawaban: 42 },
  { soal: "Deret geometri dengan suku pertama 5 dan rasionya 3. Berapa suku ke-6?", jawaban: 1215 },
  { soal: "Deret aritmatika memiliki suku pertama -2 dan selisih 6. Berapa suku ke-7?", jawaban: 34 },
  { soal: "Suku pertama deret geometri adalah 8 dan rasio 2. Berapa suku ke-5?", jawaban: 128 },
  { soal: "Jumlah 10 suku pertama dari deret aritmatika dengan suku pertama 1 dan selisih 3 adalah?", jawaban: 145 },
  { soal: "Deret geometri dengan suku pertama 3 dan rasio 2. Berapa suku ke-8?", jawaban: 384 },
  { soal: "Berapa suku ke-10 dari deret aritmatika dengan suku pertama 12 dan selisih -4?", jawaban: -24 },
  { soal: "Deret geometri memiliki suku pertama 3 dan rasio 3. Berapa suku ke-5?", jawaban: 243 },
  { soal: "Jumlah 6 suku pertama dari deret aritmatika dengan suku pertama -3 dan selisih 4 adalah?", jawaban: 42 },
  { soal: "Deret aritmatika memiliki suku pertama 9 dan selisih -2. Berapa suku ke-15?", jawaban: -19 },
  { soal: "Deret geometri memiliki suku pertama 3 dan rasionya 2. Berapa suku ke-6?", jawaban: 96 },
  { soal: "Deret aritmatika memiliki suku pertama -5 dan selisih 7. Berapa suku ke-12?", jawaban: 72 },
  { soal: "Jumlah 8 suku pertama dari deret geometri dengan suku pertama 2 dan rasio 2 adalah?", jawaban: 510 },
  { soal: "Deret aritmatika memiliki suku pertama 11 dan selisih -5. Berapa suku ke-20?", jawaban: -84 },
  { soal: "Deret geometri memiliki suku pertama 2 dan rasio 3. Berapa suku ke-7?", jawaban: 1458 },
  { soal: "Jumlah 15 suku pertama dari deret aritmatika dengan suku pertama 6 dan selisih 2 adalah?", jawaban: 255 },
  { soal: "Deret geometri memiliki suku pertama 3 dan rasio 2. Berapa suku ke-10?", jawaban: 1536 },
  { soal: "Deret aritmatika memiliki suku pertama 10 dan selisih -3. Berapa suku ke-30?", jawaban: -77 },
  { soal: "Jumlah 12 suku pertama dari deret geometri dengan suku pertama 1 dan rasio 2 adalah?", jawaban: 4095 },
  { soal: "Deret aritmatika memiliki suku pertama -10 dan selisih 7. Berapa suku ke-25?", jawaban: 158 },
  { soal: "Deret geometri memiliki suku pertama 4 dan rasio 2. Berapa suku ke-10?", jawaban: 2048 },
  { soal: "Deret aritmatika dengan suku pertama 20 dan selisih -4. Berapa suku ke-40?", jawaban: -136 },
  { soal: "Jumlah 15 suku pertama dari deret geometri dengan suku pertama 2 dan rasio 2 adalah?", jawaban: 65534 },
  { soal: "Deret aritmatika memiliki suku pertama 18 dan selisih -6. Berapa suku ke-50?", jawaban: -282 },
  { soal: "Deret geometri memiliki suku pertama 5 dan rasio 3. Berapa suku ke-9?", jawaban: 98415 },
  { soal: "Deret aritmatika dengan suku pertama -3 dan selisih 5. Berapa suku ke-100?", jawaban: 492 },
  { soal: "Jumlah 20 suku pertama dari deret geometri dengan suku pertama 1 dan rasio 2 adalah?", jawaban: 1048575 },
  { soal: "Deret aritmatika dengan suku pertama 25 dan selisih -2. Berapa suku ke-200?", jawaban: -373 },
  { soal: "Jumlah 10 suku pertama dari deret geometri dengan suku pertama 3 dan rasio 2 adalah?", jawaban: 3069 }
];

export default function LatihanSoalEasy() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Indeks soal saat ini
  const [answer, setAnswer] = useState(""); // Jawaban pengguna
  const [feedback, setFeedback] = useState(""); // Umpan balik kepada pengguna

  const handleCheckAnswer = () => {
    const currentQuestion = soalList[currentQuestionIndex];
    if (parseInt(answer) === currentQuestion.jawaban) {
      if (currentQuestionIndex < soalList.length - 1) {
        setFeedback("Jawaban Anda benar! Selamat!");
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setAnswer("");
          setFeedback("");
        }, 1000);
      } else {
        setFeedback("Selamat! Anda telah menyelesaikan semua soal!");
      }
    } else {
      setFeedback("Jawaban Anda salah. Coba lagi!");
    }
  };

  const currentQuestion = soalList[currentQuestionIndex];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>LATIHAN SOAL</Text>
      </View>

      <View style={styles.quizTitleContainer}>
        <Text style={styles.quizTitle}>Easy Quiz</Text>
      </View>

      <View style={styles.quizContainer}>
        <Text style={styles.questionTitle}>Soal {currentQuestionIndex + 1}</Text>
        <Text style={styles.questionText}>{currentQuestion.soal}</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan Jawaban Anda"
          keyboardType="numeric"
          value={answer}
          onChangeText={(text) => setAnswer(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleCheckAnswer}>
          <Text style={styles.buttonText}>Cek Jawaban</Text>
        </TouchableOpacity>

        {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
  quizTitleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  quizContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  questionText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  feedback: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

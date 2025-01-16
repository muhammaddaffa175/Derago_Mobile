import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

// Array untuk menyimpan soal dan jawaban
const soalList = [
  { soal: "Soal 1: Suku pertama deret aritmatika adalah 3 dan selisihnya adalah 5. Berapa suku ke-4?", jawaban: 18 },
  { soal: "Soal 2: Suku pertama deret geometri adalah 2 dan rasio adalah 3. Berapa suku ke-3?", jawaban: 18 },
  { soal: "Soal 3: Apa suku ke-5 dari deret aritmatika dengan suku pertama 10 dan selisih 2?", jawaban: 18 },
  { soal: "Soal 4: Suku pertama deret aritmatika adalah 7 dan selisihnya adalah 4. Berapa suku ke-6?", jawaban: 27 },
  { soal: "Soal 5: Suku pertama deret geometri adalah 5 dan rasionya adalah 2. Berapa suku ke-4?", jawaban: 40 },
  { soal: "Soal 6: Deret aritmatika memiliki suku pertama 8 dan selisih 3. Berapa jumlah 5 suku pertamanya?", jawaban: 35 },
  { soal: "Soal 7: Suku pertama deret geometri adalah 3 dan rasionya 4. Berapa suku ke-3?", jawaban: 48 },
  { soal: "Soal 8: Deret aritmatika memiliki suku pertama 4 dan selisih 5. Berapa suku ke-8?", jawaban: 39 },
  { soal: "Soal 9: Suku pertama deret geometri adalah 2 dan rasionya 5. Berapa suku ke-4?", jawaban: 250 },
  { soal: "Soal 10: Deret aritmatika dengan suku pertama 15 dan selisih -3. Berapa suku ke-6?", jawaban: 0 },
  { soal: "Soal 11: Deret geometri memiliki suku pertama 2 dan rasionya 3. Berapa suku ke-5?", jawaban: 162 },
  { soal: "Soal 12: Jumlah 7 suku pertama dari deret aritmatika dengan suku pertama 3 dan selisih 2 adalah?", jawaban: 42 },
  { soal: "Soal 13: Deret geometri dengan suku pertama 5 dan rasionya 3. Berapa suku ke-6?", jawaban: 1215 },
  { soal: "Soal 14: Deret aritmatika memiliki suku pertama -2 dan selisih 6. Berapa suku ke-7?", jawaban: 34 },
  { soal: "Soal 15: Suku pertama deret geometri adalah 8 dan rasio 2. Berapa suku ke-5?", jawaban: 128 },
  { soal: "Soal 16: Jumlah 10 suku pertama dari deret aritmatika dengan suku pertama 1 dan selisih 3 adalah?", jawaban: 145 },
  { soal: "Soal 17: Deret geometri dengan suku pertama 3 dan rasio 2. Berapa suku ke-8?", jawaban: 384 },
  { soal: "Soal 18: Berapa suku ke-10 dari deret aritmatika dengan suku pertama 12 dan selisih -4?", jawaban: -24 },
  { soal: "Soal 19: Deret geometri memiliki suku pertama 3 dan rasio 3. Berapa suku ke-5?", jawaban: 243 },
  { soal: "Soal 20: Jumlah 6 suku pertama dari deret aritmatika dengan suku pertama -3 dan selisih 4 adalah?", jawaban: 42 },
  { soal: "Soal 21: Deret aritmatika memiliki suku pertama 9 dan selisih -2. Berapa suku ke-15?", jawaban: -19 },
  { soal: "Soal 22: Deret geometri memiliki suku pertama 3 dan rasionya 2. Berapa suku ke-6?", jawaban: 96 },
  { soal: "Soal 23: Deret aritmatika memiliki suku pertama -5 dan selisih 7. Berapa suku ke-12?", jawaban: 72 },
  { soal: "Soal 24: Jumlah 8 suku pertama dari deret geometri dengan suku pertama 2 dan rasio 2 adalah?", jawaban: 510 },
  { soal: "Soal 25: Deret aritmatika memiliki suku pertama 11 dan selisih -5. Berapa suku ke-20?", jawaban: -84 },
  { soal: "Soal 26: Deret geometri memiliki suku pertama 2 dan rasio 3. Berapa suku ke-7?", jawaban: 1458 },
  { soal: "Soal 27: Jumlah 15 suku pertama dari deret aritmatika dengan suku pertama 6 dan selisih 2 adalah?", jawaban: 255 },
  { soal: "Soal 28: Deret geometri memiliki suku pertama 3 dan rasio 2. Berapa suku ke-10?", jawaban: 1536 },
  { soal: "Soal 29: Deret aritmatika memiliki suku pertama 10 dan selisih -3. Berapa suku ke-30?", jawaban: -77 },
  { soal: "Soal 30: Jumlah 12 suku pertama dari deret geometri dengan suku pertama 1 dan rasio 2 adalah?", jawaban: 4095 },
  { soal: "Soal 31: Deret aritmatika memiliki suku pertama -10 dan selisih 7. Berapa suku ke-25?", jawaban: 158 },
  { soal: "Soal 32: Deret geometri memiliki suku pertama 4 dan rasio 2. Berapa suku ke-10?", jawaban: 2048 },
  { soal: "Soal 33: Deret aritmatika dengan suku pertama 20 dan selisih -4. Berapa suku ke-40?", jawaban: -136 },
  { soal: "Soal 34: Jumlah 15 suku pertama dari deret geometri dengan suku pertama 2 dan rasio 2 adalah?", jawaban: 65534 },
  { soal: "Soal 35: Deret aritmatika memiliki suku pertama 18 dan selisih -6. Berapa suku ke-50?", jawaban: -282 },
  { soal: "Soal 36: Deret geometri memiliki suku pertama 5 dan rasio 3. Berapa suku ke-9?", jawaban: 98415 },
  { soal: "Soal 37: Deret aritmatika dengan suku pertama -3 dan selisih 5. Berapa suku ke-100?", jawaban: 492 },
  { soal: "Soal 38: Jumlah 20 suku pertama dari deret geometri dengan suku pertama 1 dan rasio 2 adalah?", jawaban: 1048575 },
  { soal: "Soal 39: Deret aritmatika dengan suku pertama 25 dan selisih -2. Berapa suku ke-200?", jawaban: -373 },
  { soal: "Soal 40: Jumlah 10 suku pertama dari deret geometri dengan suku pertama 3 dan rasio 2 adalah?", jawaban: 3069 }
];

export default function Kuis() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Indeks soal saat ini
  const [answer, setAnswer] = useState(""); // Jawaban yang dimasukkan pengguna
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
        }, 1000); // Lanjutkan ke soal berikutnya setelah 1 detik
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
      <View style={styles.quizContainer}>
        <Text style={styles.question}>{currentQuestion.soal}</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan jawaban Anda"
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
  quizContainer: {
    marginVertical: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
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
    backgroundColor: "#007BFF",
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

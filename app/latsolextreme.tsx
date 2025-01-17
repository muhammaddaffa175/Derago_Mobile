import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";

const questions = [
  {
      question: 'Q1: In a geometric sequence, the first term is 3 and the common ratio is 2. What is the 4th term?',
      answers: [
          { text: '12', correct: false },
          { text: '24', correct: true },
          { text: '18', correct: false },
          { text: '48', correct: false }
      ]
  },
  {
      question: 'Q2: What is the formula for the sum of the first n terms in an arithmetic sequence?',
      answers: [
          { text: 'S_n = n/2 * (a + l)', correct: true },
          { text: 'S_n = a + (n - 1)d', correct: false },
          { text: 'S_n = a * r^(n-1)', correct: false },
          { text: 'S_n = a + l', correct: false }
      ]
  },
  {
      question: 'Q3: In a geometric sequence, if the first term is 5 and the common ratio is 3, what is the 3rd term?',
      answers: [
          { text: '15', correct: false },
          { text: '45', correct: true },
          { text: '30', correct: false },
          { text: '60', correct: false }
      ]
  },
  {
      question: 'Q4: The sum of an infinite geometric series is 16, and the first term is 8. What is the common ratio?',
      answers: [
          { text: '0.5', correct: true },
          { text: '2', correct: false },
          { text: '0.25', correct: false },
          { text: '1', correct: false }
      ]
  },
  {
      question: 'Q5: If the 5th term of an arithmetic sequence is 20 and the common difference is 3, what is the first term?',
      answers: [
          { text: '5', correct: false },
          { text: '8', correct: true },
          { text: '10', correct: false },
          { text: '15', correct: false }
      ]
  },
  {
      question: 'Q6: What is the sum of the first 8 terms of an arithmetic sequence where the first term is 4 and the common difference is 5?',
      answers: [
          { text: '120', correct: false },
          { text: '132', correct: true },
          { text: '128', correct: false },
          { text: '140', correct: false }
      ]
  },
  {
      question: 'Q7: In an arithmetic sequence, if the first term is 10 and the last term is 50 with 6 terms, what is the common difference?',
      answers: [
          { text: '8', correct: false },
          { text: '10', correct: false },
          { text: '5', correct: true },
          { text: '12', correct: false }
      ]
  },
  {
      question: 'Q8: The first term of a geometric sequence is 2 and the common ratio is 3. What is the 5th term?',
      answers: [
          { text: '54', correct: true },
          { text: '36', correct: false },
          { text: '72', correct: false },
          { text: '18', correct: false }
      ]
  },
  {
      question: 'Q9: The sum of the first 4 terms of a geometric sequence is 30. If the first term is 2, what is the common ratio?',
      answers: [
          { text: '2', correct: false },
          { text: '3', correct: true },
          { text: '4', correct: false },
          { text: '5', correct: false }
      ]
  },
  {
      question: 'Q10: In an arithmetic sequence, if the first term is 1 and the common difference is 6, what is the sum of the first 10 terms?',
      answers: [
          { text: '280', correct: false },
          { text: '300', correct: true },
          { text: '320', correct: false },
          { text: '330', correct: false }
      ]
  },
  {
      question: 'Q11: If the first term of a geometric sequence is 10 and the common ratio is 0.5, what is the 6th term?',
      answers: [
          { text: '0.625', correct: true },
          { text: '1.25', correct: false },
          { text: '2.5', correct: false },
          { text: '5', correct: false }
      ]
  },
  {
      question: 'Q12: The sum of the first 5 terms of an arithmetic sequence is 40. If the first term is 4, what is the common difference?',
      answers: [
          { text: '1.5', correct: true },
          { text: '2', correct: false },
          { text: '3', correct: false },
          { text: '5', correct: false }
      ]
  },
  {
      question: 'Q13: In a geometric sequence, if the sum of the first 4 terms is 30 and the first term is 6, what is the common ratio?',
      answers: [
          { text: '0.5', correct: false },
          { text: '2', correct: true },
          { text: '1.5', correct: false },
          { text: '3', correct: false }
      ]
  },
  {
      question: 'Q14: The 10th term of an arithmetic sequence is 45, and the common difference is 5. What is the first term?',
      answers: [
          { text: '10', correct: false },
          { text: '5', correct: false },
          { text: '0', correct: true },
          { text: '15', correct: false }
      ]
  },
  {
      question: 'Q15: What is the formula for the sum of the first n terms of a geometric sequence?',
      answers: [
          { text: 'S_n = a(1 - r^n) / (1 - r)', correct: true },
          { text: 'S_n = a + (n - 1)d', correct: false },
          { text: 'S_n = a * r^(n-1)', correct: false },
          { text: 'S_n = n/2 * (a + l)', correct: false }
      ]
  }
];


export default function LatihanSoalExtreme() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Dalam detik
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { updateHighScore, user } = useAuth();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false);
      handleFinishQuiz();
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(60);
    setCurrentQuestionIndex(0);
  };

  const handleOptionSelect = (option: { text: string; correct: boolean }) => {
    if (option.correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = async () => {
    setGameStarted(false);
    Alert.alert("Quiz Completed!", `Your score: ${score}`);
    if (user) {
      try {
        await updateHighScore(score); // Panggil fungsi untuk memperbarui highScore
      } catch (error) {
        Alert.alert("Error", "Failed to update high score.");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background-extreme-quiz.png")}
      style={styles.background}
    >
      <View style={styles.header}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      </View>

      {gameStarted ? (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestionIndex].question}
          </Text>
          {questions[currentQuestionIndex].answers.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Score: {score}</Text>
            <Text style={styles.infoText}>Time Left: {timeLeft}s</Text>
          </View>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.title}>Merasa cepat?</Text>
          <Text style={styles.subtitle}>Tuntaskan quiz berikut baru aku mengakuimu cepat!</Text>
          <TouchableOpacity style={styles.startButton} onPress={startGame}>
            <Text style={styles.startButtonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  quizContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

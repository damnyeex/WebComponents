<template>
  <div class="test-page">
    <h1>Тестирование</h1>
    <p>Пожалуйста, ответьте на следующие вопросы:</p>
    <!-- Вопрос -->
    <div class="question" v-for="(question, index) in questions" :key="index">
      <p>
        <strong>{{ index + 1 }}. {{ question.text }}</strong>
      </p>
      <div>
        <label v-for="(answer, aIndex) in question.answers" :key="aIndex">
          <input
            type="radio"
            :name="'question' + index"
            :value="answer"
            v-model="userAnswers[index]"
          />
          {{ answer }}
        </label>
      </div>
    </div>
    <!-- Кнопка для проверки ответов -->
    <button class="submit-button" @click="submitAnswers">Завершить тест</button>
  </div>
</template> 

<script>
export default {
  name: "TestPage",
  data() {
    return {
      questions: [
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Сколько планет в Солнечной системе?",
          answers: ["8", "9", "7"],
          correctAnswer: "8",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
        {
          text: "Какое животное является символом 2024 года?",
          answers: ["Кролик", "Дракон", "Крыса"],
          correctAnswer: "Дракон",
        },
      ],
      userAnswers: [],
      result: null,
      bestResult: null,
    };
  },

  computed: {
    attempts() {
      return parseInt(localStorage.getItem("attempts") || 1);
    },
  },

  mounted() {
    const storedBestResult = localStorage.getItem("bestResult");
    this.bestResult =
      storedBestResult !== null ? parseInt(storedBestResult, 10) : null;
  },

  methods: {
    submitAnswers() {
      this.result = this.questions.reduce((score, question, index) => {
        return (
          score + (this.userAnswers[index] === question.correctAnswer ? 1 : 0)
        );
      }, 0);

      const isTestPassed = this.result >= 7;

      let attempts = this.attempts;

      const percentage = this.result
        ? (this.result / this.questions.length) * 100
        : 0;
      if (
        !isTestPassed &&
        (this.bestResult === null || percentage > this.bestResult)
      ) {
        this.bestResult = percentage;
        localStorage.setItem("bestResult", this.bestResult.toString());
      }

      if (isTestPassed) {
        localStorage.setItem("attempts", 0);
      } else {
        attempts++;
        localStorage.setItem("attempts", attempts);
      }

      this.$router.push({
        path: "/result",
        query: {
          correctAnswers: this.result,
          totalQuestions: this.questions.length,
          attempts: attempts,
          bestResult: isTestPassed ? null : this.bestResult,
        },
      });
    },
  },
};
</script> 

<style scoped>
.test-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 30px;
}

.test-page h1 {
  margin-bottom: 14px;
}

.question {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
}

.question p {
  margin-bottom: 30px;
}

label {
  display: block;
  padding-bottom: 25px;
}

.submit-button {
  width: 160px;
  height: 52px;
  border: none;
  color: #000000;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #ff1a1a;
}

.result {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 8px;
}
</style>
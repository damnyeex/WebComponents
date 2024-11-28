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
    <!-- Результат теста -->
    <div v-if="result !== null" class="result">
      <h2>Результаты теста:</h2>
      <p>
        Вы ответили правильно на {{ result }} из
        {{ questions.length }} вопросов.
      </p>
      <p v-if="result >= 7">Поздравляем! Вы успешно прошли тест.</p>
      <p v-else>К сожалению, вы не прошли тест. Попробуйте снова!</p>
    </div>
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
      ],
      userAnswers: [],
      result: null,
    };
  },
  methods: {
    submitAnswers() {
      this.result = this.questions.reduce((score, question, index) => {
        return (
          score + (this.userAnswers[index] === question.correctAnswer ? 1 : 0)
        );
      }, 0);
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
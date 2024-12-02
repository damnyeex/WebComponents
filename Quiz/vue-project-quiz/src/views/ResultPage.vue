<template>
  <div class="result-page">
    <div class="header">
      <h1>Результаты тестирования</h1>
      <p class="user-info">Константин Константинопольский</p>
      <p class="date">02.12.2020</p>
    </div>
    <div class="result-block">
      <div class="result-score">
        <p class="attempts">Результаты {{ attempts }}-й попытки</p>
        <p class="score">{{ correctAnswers }}/{{ totalQuestions }}</p>
        <p class="percentage">{{ percentage }}%</p>
        <p v-if="!isTestPassed && bestResult !== null && attempts !== 1">
          Лучший результат: {{ bestResult }}%
        </p>
      </div>
    </div>
    <div class="comment">
      <p v-if="isTestPassed">Поздравляем! Вы успешно прошли тест!</p>
      <p v-else>
        Не очень хороший результат, рекомендуем изучить курс еще раз.
      </p>
    </div>
    <router-link to="/" class="back-button">Повторить тест</router-link>
  </div>
</template> <script>
export default {
  name: "ResultPage",
  props: {
    correctAnswers: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
  },
  computed: {
    attempts() {
      return parseInt(this.$route.query.attempts || 1);
    },

    percentage() {
      return Math.round((this.correctAnswers / this.totalQuestions) * 100);
    },

    bestResult() {
      return this.$route.query.bestResult !== null
        ? parseInt(this.$route.query.bestResult)
        : null;
    },

    isTestPassed() {
      return this.correctAnswers >= 7;
    },
  },
};
</script> 
<style scoped>
.result-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px;
}
h1 {
  font-family: "";
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.user-info {
  font-size: 16px;
  color: #555;
  margin: 0;
}
.result-block {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  width: 300px;
}
.result-score {
  text-align: center;
}
.result-score p {
  margin: 5px 0;
}
.score {
  margin-bottom: 5px;
}
.percentage {
  color: #4caf50;
}
.comment {
  font-size: 18px;
  margin-top: 10px;
  color: #333;
}
.back-button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #e9262d;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.back-button:hover {
  background-color: #d32f2f;
}
</style>
<template>
  <div class="home">
    <h1>Тестирование</h1>
    <p>
      Осталось пройти небольшой тест, который покажет, как хорошо ты усвоил
      материал
    </p>
    <div class="info-box">
      <p>
        — Для успешного прохождения нужно правильно ответить минимум на 7
        вопросов из 10
      </p>
      <p>— На прохождение теста дается 3 попытки</p>
    </div>
    <router-link to="/test" class="start-button"
      >Начать
      <img src="/img/arrow.svg" alt="arrow" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 30px;
}

.home h1 {
  margin-bottom: 30px;
}

.info-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffefe0;
  margin-top: 30px;
}

.info-box p {
  padding-bottom: 5px;
}

.start-button {
  width: 940px;
  background-color: #e9262d;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 40px;
}

.start-button img {
  margin-left: 22px;
}

.start-button:hover {
  background-color: #ff1a1a;
}
</style>
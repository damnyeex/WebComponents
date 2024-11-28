<template>
  <header class="header">
    <div class="navigation-menu">
      <nav class="navigation-menu__wrapper">
        <button><img src="/img/menu.png" alt="menu" /></button>
        <p>Текст</p>
      </nav>
      <div class="progress-bar"></div>
    </div>
  </header>
</template> 

<script>
export default { name: "Header" };
</script> 

<style scoped>
.header {
  margin-bottom: 76px;
}

.navigation-menu {
  margin-bottom: 30px;
}

.navigation-menu__wrapper {
  display: flex;
  align-items: center;
  margin: 22px 30px;
}
.navigation-menu button {
  background-color: transparent;
  border: 0;
}

.navigation-menu p {
  margin-left: 28px;
}

.progress-bar {
  width: 100%;
  height: 1px;
  background-color: #73be43;
  position: relative;
}

.progress-bar::before {
  content: "";
  position: absolute;
  width: 386px;
  height: 5px;
  background-color: #e9262d;
}

.progress-bar::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 500px;
  background-color: #e9262d;
}
</style>

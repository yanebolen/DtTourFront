<template>
  <div id="app" style="height: 100%;">
    <div class="gridOnAllPage">
      <header>
        <h1>DT Tour</h1>
      </header>
      <div class="constructor">
        <router-view></router-view>
      </div>
      <div class="aside">
        <div class="asideCustomization">
          <h5 style="text-align: center;">Настройка</h5>
          <p>Укажем необходимые данные. Название проекта и данные направленные окуда, куда, а также дату события</p>
        </div>
        <div class="asidePlanning">
          <h5 style="text-align: center;">Планирование</h5>
          <p>Спланируем по дням ваше путешествие. Отметим места для посещения и маршрут</p>
        </div>
        <div class="asideConfirmation">
          <h5 style="text-align: center;">Подтверждение</h5>
          <p>Сверим всю информацию и посмотрим на получившийся тур и сохраним</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.gridOnAllPage {
  display: grid;
  grid-template-columns: 8fr 3fr;
  grid-template-rows: 9rem auto;
  grid-template-areas:
    "header header"
    "constructor aside"
}
header{
  grid-area: header;
}
.constructor{
  grid-area: constructor;
  margin-left: 12rem;
  margin-right: 2rem;
}
.aside{
  grid-area: aside;
  color: white;
}

/*Для бэкграунда*/
.gridOnAllPage {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #F9F9F9 65%, #2C7BE5 35%);
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


</style>

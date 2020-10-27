<template>
  <div>
    <div class="card border-light" style="height: 45rem">
      <div class="card-body" style="margin-right: 10rem; margin-left: 10rem;">
        <h1 class="card-title mb-5" style="text-align: center;">Что хотим посетить?</h1>
          <div class="vertical-scroll-wrapper squares">
            <div class="card mb-2" v-for="day in 5" :key="day.id">
              <h4>День {{day}}</h4>

                  <div class="card mx-5 my-2">
                    <div class="row" style="height: 45px;">
                      <div class="col mx-3">
                        <p class="mt-2">Посетить морской вокзал</p>
                      </div>
                      <div class="col mx-3" style="text-align: right;">
                        <p class="mt-2">12:55</p>
                      </div>
                    </div>
                  </div>

              <button type="button" class="btn btn-light" @click="buttonToPlunningMap">Добавить</button>
            </div>
          </div>
      <div class="card-footer border-light text-muted mt-5" style="background-color: #0000;">
        <div class="row">
          <div class="col ml-5">
            <button type="button" class="btn btn-light"><router-link to="/">Назад</router-link></button>
          </div>
          <div class="col mr-5" style="text-align: right;">
            <button type="button" class="btn btn-primary" @click="buttonToConfimation">Следующий шаг</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    buttonToPlunningMap(){
      this.$router.push('/PlanningMap')
    },
    buttonToConfimation(){
      this.$router.push('/Confirmation')
    }
  }
}
</script>

<style scoped>

/* Скролл элементов внутри spa */
.vertical-scroll-wrapper {
  /* width: 500px; */
  height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
}
/* Стилизация объектов внутри скрола */
.vertical-scroll-wrapper > div {
  /* width: 100px; */
  /* height: 10rem; */
}
/* Эта функция скрывает полосу прокрутки */
.vertical-scroll-wrapper::-webkit-scrollbar {
  width: 0;
}

</style>

<template>
  <div>
    <div class="card border-light mapGridCard" style="height: 45rem">
      <div class="" style="background-color: #2C7BE5">
        <button type="button" class="btn btn-link mt-2 ml-2" style="color: white; text-decoration: none;" @click="buttonToPlanning">Назад</button>
        <div class="mx-5 mt-3" style="color: white;">
          <h1 style="text-align: center;">Новое событие</h1>
          <h5 style="margin-top: 2rem">Название</h5>
          <div class="input-group mb-3">
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
          <h5 style="margin-top: 2rem">Время посещения</h5>
          <div class="input-group mb-3">
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
          <h5 style="margin-top: 4rem">Место</h5>
          <div class="input-group mb-3">
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
        <div class="save-btn">
          <button type="button" class="btn btn-primary" style="margin-top: 9rem;" @click="buttonToPlanning">Сохранить</button>
        </div>
      </div>
      <div class="">
        2
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    buttonToPlanning(){
      this.$router.push('/Planning')
    }
  }
}
</script>

<style scoped>
.mapGridCard{
  display: Grid;
  grid-template-columns: 3fr 5fr;
}
.save-btn{
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div>
    <div class="card border-light" style="height: 45rem">
      <div class="card-body" style="margin-right: 10rem; margin-left: 10rem;">
        <h1 class="card-title" style="text-align: center; margin-bottom: 7rem;">Настроим путешествие</h1>
        <h5 class="mb-4">Название вашего путешествия</h5>
        <div class="input-group mb-5">
          <input type="tourTitleInput" id="tourTitleInput" class="form-control" :class="{'is-invalid' : $v.tourTitleInput.$error}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="tourTitleInput" @blur="$v.tourTitleInput.$touch()">
          <div class="invalid-feedback" v-if="!$v.tourTitleInput.maxLength">
            Максимальное число символов {{$v.tourTitleInput.$params.maxLength.max}}. Сейчас {{tourTitleInput.length}}
          </div>
        </div>
        <h5 class="mb-4">Укажите ваше направление</h5>
        <div class="row">
          <div class="col">
            <div class="input-group mr-4">
              <input type="text" placeholder="Откуда" class="form-control mr-2" :class="{'is-invalid' : $v.tourDepartureCityInput.$error}" v-model="tourDepartureCityInput" @blur="$v.tourDepartureCityInput.$touch()">
              <input type="text" placeholder="Куда" class="form-control" :class="{'is-invalid' : $v.tourArrivalCityInput.$error}" v-model="tourArrivalCityInput" @blur="$v.tourArrivalCityInput.$touch()">
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <!-- <input type="text" placeholder="Туда" class="form-control mr-2" v-model="tourDepartureDateInput"> -->
              <input
                type="text"
                class="form-control mr-2"
                v-model="tourDepartureDateInput"
                id="tourDepartureDateInput"
                placeholder="Туда"
                @blur="$v.tourDepartureDateInput.$touch()"
                :class="{'is-invalid mr-2' : $v.tourDepartureDateInput.$error}"
              />

              <date-picker
                locale="ru"
                v-model="tourDepartureDateInput"
                format="YYYY/MM/DD"
                element="tourDepartureDateInput"
                :auto-submit="true"
                :min="this.formatDate(date)"
              />

              <!-- <input type="text" placeholder="Обратно" class="form-control" v-model="tourArrivalDateInput"> -->
              <input
                type="text"
                class="form-control"
                v-model="tourArrivalDateInput"
                id="tourArrivalDateInput"
                placeholder="Обратно"
                @blur="$v.tourArrivalDateInput.$touch()"
                :class="{'is-invalid' : $v.tourArrivalDateInput.$error}"
              />

              <date-picker
                :disabled="!tourDepartureDateInput"
                locale="ru"
                v-model="tourArrivalDateInput"
                format="YYYY/MM/DD"
                element="tourArrivalDateInput"
                :auto-submit="true"
                :min="tourDepartureDateInput"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer border-light text-muted mt-5" style="background-color: #0000;">
        <div class="row">
          <div class="col ml-5">
            <button type="button" class="btn btn-light">Назад</button>
          </div>
          <div class="col mr-5" style="text-align: right;">
            <button type="submit" class="btn btn-primary" :disabled="$v.$anyError || !$v.tourTitleInput.required || !$v.tourDepartureCityInput.required || !$v.tourArrivalCityInput.required || !$v.tourDepartureDateInput.required || !$v.tourDepartureDateInput.required" @click="buttonToPlunning">Следующий шаг</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import DatePicker from 'vue2-datepicker';
// стили
// import 'vue2-datepicker/index.css';
const { required, maxLength } = require('vuelidate/lib/validators')

export default {
  data() {
    return{
      // value1: [new Date(), new Date()],
      date: new Date(),
      tourTitleInput: '',
      tourDepartureCityInput: '',
      tourArrivalCityInput: '',
      tourDepartureDateInput: '',
      tourArrivalDateInput: '',
    }
  },

  methods: {
    buttonToPlunning () {
      this.$router.push('/Planning');
      localStorage.setItem('tourTitle', this.tourTitleInput);
      localStorage.setItem('departureCity', this.tourDepartureCityInput);
      localStorage.setItem('arrivalCity', this.tourArrivalCityInput);
      localStorage.setItem('departureDate', this.tourDepartureDateInput);
      localStorage.setItem('arrivalDate', this.tourArrivalDateInput);
      console.log(this.tourDepartureDateInput - this.tourArrivalDateInput)
    },
     formatDate(date) {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yy = date.getFullYear() % 100;
      return yy + '/' + mm + '/' + dd;
    }
  },

  validations: {
    tourTitleInput:{
      required,
      maxLength: maxLength(35),
    },
    tourDepartureCityInput:{
      required
    },
    tourArrivalCityInput:{
      required
    },
    tourDepartureDateInput:{
      required
    },
    tourArrivalDateInput:{
      required
    },
  },
}
</script>

<style scoped>

</style>

<script setup>
import { ref } from 'vue'

const resultArray = ref([0])
let words = ref('')
let splitWords = ref([])

let isShow = ref(false)

const totalSum = () => {
  let sumOfCheckbox = resultArray.value.reduce((acc, number) => acc + number)
  return sumOfCheckbox
}
const limitErrow = (message) => {
  return alert(message)
}
const filterWords = () => {
  splitWords = words.value.split(',').sort()
  isShow = true
  if (splitWords.length > 10) {
    return limitErrow('Вы ввели больше 10 слов!')
  }
  words.value = ''
}
const clearInput = () => {
  words.value = ''
}
</script>
<template>
  <div>
    <div class="form">
      <div class="container">
        <div class="form__inner">
          <h1 class="form__title">Vue form</h1>
          <div class="checkbox__list">
            <div class="checkbox__item">
              <input type="checkbox" id="checkbox-5" v-model="resultArray" :value="5" />
              <label for="checkbox-5">5</label>
            </div>
            <div class="checkbox__item">
              <input type="checkbox" id="checkbox-8" v-model="resultArray" :value="8" />
              <label for="checkbox-8">8</label>
            </div>
            <div class="checkbox__item">
              <input type="checkbox" id="checkbox-12" v-model="resultArray" :value="12" />
              <label for="checkbox-12">12</label>
            </div>
            <div class="checkbox__item">
              <input type="checkbox" id="checkbox-15" v-model="resultArray" :value="15" />
              <label for="checkbox-15">15</label>
            </div>
            <div class="checkbox__item">
              <input type="checkbox" id="checkbox-22" v-model="resultArray" :value="22" />
              <label for="checkbox-22">22</label>
            </div>
            <div class="checkbox__item">Результат: {{ totalSum() }}</div>
          </div>
          <div class="input__box">
            <div class="input__left">
              <label for="input">Введите слова через запятую(не больше 10)</label>
              <input id="input" type="text" class="input" v-model="words" />
              <button class="button" @click="filterWords()">Отфильтровать</button>
              <button class="button" @click="clearInput()">Очистить</button>
            </div>
            <div class="input__right">
              <label for="select">Результат</label>
              <select v-model="splitWords" id="select" name="select" :class="{ show: isShow }">
                <option v-for="word in splitWords" :key="word" :value="word">
                  {{ word }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.form {
  background-color: #e0ffff;
  &__title {
    font-size: 36px;
    text-align: center;
  }
}
.form__inner {
  padding: 100px;
}
.checkbox__list {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
  font-size: 24px;
  margin-bottom: 30px;
}
.input__box {
  display: flex;
  gap: 20px;
}
.input__left,
.input__right {
  flex-direction: column;
  flex-basis: 50%;
  gap: 20px;
  display: flex;
}
#select {
  opacity: 0;
  transition: opacity 0.3s linear;

  &.show {
    opacity: 1;
  }
}
button {
  width: 100%;
  max-width: 250px;
  padding: 5px 20px;
}
@media (max-width: 370px) {
  .form__inner {
    padding: 50px 30px;
  }
  .input__box {
    flex-direction: column;
  }
}
</style>

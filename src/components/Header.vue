<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let isActive = ref(false)
let navMobule = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
  navMobule.value = !navMobule.value
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="menu">
          <div :class="['menu', { active: isActive }]" @click="toggleMenu()">
            <img src="../assets/img//icons/menu.svg" alt="" />
          </div>
        </div>
        <div class="header__logo">
          <a href="/">
            <img src="@/assets/img/logo.svg" alt="" class="header__logo-img" />
          </a>
        </div>
        <div class="header__search">
          <input class="header__search-input" type="text" placeholder="Поиск..." />
        </div>
        <nav :class="['nav', { active: navMobule }]">
          <ul class="nav__list">
            <li class="nav__item">
              <RouterLink to="/about"> О нас </RouterLink>
              <img class="nav__item-img" src="../assets/img/icons/information.svg" alt="" />
            </li>

            <li class="nav__item nav__item--parent">
              Бизнес структура
              <img class="nav__item-img" src="../assets/img/icons/structure.svg" alt="" />
              <ul class="nav__sub-list">
                <li class="nav__sub-item">Подпункт 1</li>
                <li class="nav__sub-item">Подпункт 2</li>
                <li class="nav__sub-item">Подпункт 3</li>
              </ul>
            </li>
            <li class="nav__item">
              Документация
              <img class="nav__item-img" src="../assets/img/icons/contract.svg" alt="" />
            </li>
          </ul>
          <ul class="nav__list">
            <li class="nav__item">
              +971 50 601 8233
              <img class="nav__item-img" src="../assets/img/icons/phone.svg" alt="" />
            </li>
            <li class="nav__item">
              tbb.dmcc@gmail.com
              <img class="nav__item-img" src="../assets/img/icons/mail.svg" alt="" />
            </li>
            <li class="nav__item">
              Бизнес-перспектива
              <img class="nav__item-img" src="../assets/img/icons/dollar.svg" alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 25px 0;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  display: flex;
  flex-direction: column;
}
.nav__list {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 10px;
}
.nav__item {
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: black;
  }
}
.nav__item-img {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}
.nav__item--parent {
  position: relative;
  &:hover {
    .nav__sub-list {
      display: block;
    }
  }
}
.nav__sub-list {
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 10;
  display: none;
  width: 200px;
  background-color: #fff;
}
.nav__sub-item {
  margin-bottom: 10px;
}
.menu {
  display: none;
  img {
    width: 30px;
  }
}
.header__search {
  display: none;
}
@media (max-width: 749px) {
  .nav {
    display: none;
  }
  .header__search {
    display: block;
  }
  .menu {
    position: relative;
    z-index: 1001;
    display: block;
  }
  .nav.active {
    background-color: #bbfff8;
    display: block;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .nav__list {
      gap: 30;
      max-width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &:first-child {
        margin-top: 100px;
        margin-bottom: 30px;
      }
    }
    .nav__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .nav__item-img {
      display: none;
    }
    .nav__sub-list {
      display: block;
      position: relative;
      width: auto;
      background-color: transparent;
    }
  }
  .header__logo {
    order: 1;
    img {
      width: 110px;
    }
  }
}
</style>

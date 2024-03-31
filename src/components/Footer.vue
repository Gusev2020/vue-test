<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const getUsers = computed(() => {
  return store.getters.allUsers
})
</script>
<template>
  <footer class="footer users">
    <div class="container">
      <div class="users__inner">
        <div class="users__item" v-for="user in getUsers" :key="user.id">
          <div>{{ user.name }}</div>
          <div>{{ user.surname }}</div>
          <div>{{ user.age }} года</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: auto;
  padding: 30px 0;
  background-color: #e8f194;
}
.users__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.users__item {
  border: 1px solid #ccc;
  gap: 15px;
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
  max-width: 300px;
  display: flex;
}
@media (max-width: 749px) {
  .users__inner {
    flex-direction: column;
  }
}
</style>

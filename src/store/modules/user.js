export default {
  state: {
    users: [
      { id: 1, name: 'Олег', surname: 'Петров', age: 24 },
      { id: 2, name: 'Иван', surname: 'Олегов', age: 22 },
      { id: 3, name: 'Димон', surname: 'Смиронов', age: 23 }
    ]
  },
  getters: {
    allUsers(state) {
      return state.users
    }
  }
}

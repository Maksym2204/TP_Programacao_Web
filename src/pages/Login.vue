<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.username === this.username && user.password === this.password);
      if (user) {
        alert('Login bem sucedido!');
        this.$router.push('/home');
      } else {
        alert('Nome de utilizador ou Password errada');
      }
    }
  }
};
</script>

<style scoped>

</style>

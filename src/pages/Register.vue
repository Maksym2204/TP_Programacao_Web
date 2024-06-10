<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
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
    register() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({username: this.username, password: this.password});
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registo bem sucedido!');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>

</style>

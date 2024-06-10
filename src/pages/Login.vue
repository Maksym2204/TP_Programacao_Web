<template>
  <div>
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
    <p v-if="errorMessage">{{ errorMessage }}</p>
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
        alert('Login successful!');
        this.$router.push('/dashboard'); // Redirect to a protected route
      } else {
        alert('Invalid username or password');
      }
    }
  }
};
</script>

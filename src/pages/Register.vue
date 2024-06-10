<template>
  <div>
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
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    register() {
      // Simulate saving user data to a JSON file
      // In a real application, you would send this data to a backend server
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some(user => user.username === this.username)) {
        this.errorMessage = 'Username already exists';
      } else {
        users.push({ username: this.username, password: this.password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful');
        this.$router.push('/login');
      }
    }
  }
};
</script>

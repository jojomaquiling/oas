<template>
  <div id="app">
    <div id="the_link">
        <router-link :to="{ name: 'Hello' }">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/coins/ethereum">Ethereum</router-link>
        <router-link to="/coins/bitcoin">Bitcoin</router-link>
        <router-link to="/login">Login</router-link>
        </div>
        <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

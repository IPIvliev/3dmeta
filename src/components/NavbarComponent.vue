<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <router-link class="navbar-brand" to="/"><img src="../assets/logo.png" style="margin-left: 10px;"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto" style="margin-left: 100px;">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/explore">Explore</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/account">Account</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>        
      </ul>
    <form class="form-inline my-2 col-6 my-lg-0">
      <input class="form-control w-75 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div class="btns" style="margin-left: 100px;">
      <button class="btn btn-success" @click="connect" v-if="!account">Login</button>
      <span v-else>Hello!</span>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async connect () {
      await this.$store.dispatch('connect', true)
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    }
  }
}
</script>

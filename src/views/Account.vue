<template>
  <div class="container" style="margin-top:100px;">
    <div class="row">
      <div class="col-12">
        <h1>Account</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-2">Menu
        {{ currentRouteName }}
        <ul>
          <li><router-link :to="'/account'"> your models</router-link></li>
          <li>Model page</li>
          <li><router-link :to="'/account/edit'"> New model </router-link></li>
        </ul>
      </div>
      
      <div class="col-10">
        {{ $store.state.account }}
        <button class="btn btn-primary" @click="reSetModels">Reset</button>
        <div class="row mt-3" v-if="currentRouteName === 'Account'">
          <div class="col-4" v-for="model in $store.state.models" :key="model">
            <router-link :to="'/account/'+ model.dna">
              <div class="card m-2">
                <img class="card-img-top" :src="model.image" alt="Card image cap">
                <div class="card-body">
                  <div class="card-title">{{ model.name }}</div>
                  {{ model.attributes[1].trait_type }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row" v-else>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  date() {
    return {
      minting: false,
    }
  },
  methods: {
    async reSetModels() {
      await this.$store.dispatch("getModels");
    }
},
  async mounted() {
    await this.$store.dispatch("getModels");
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>
<template>
  <div class="container mt-5">
    <div class="row align-items-center ">
      <div class="col-6" style="">
        <h1 class="d-inline-block text-truncate" style="max-width: 500px;">Create and Use on 3DMeta, collect, buy and sell on OpenSea</h1>
        <p>3DMeta is marketplace with 3D Models for Metaverse creation</p>
        <buttton class="btn btn-success">Exlore</buttton>
        <buttton class="btn btn-primary ml-3">Exlore</buttton>
      </div>
    <div class="col-6 mt-5"><HelloWorld msg="Welcome to Your Vue.js App"/></div>
    </div>
    <categories-component></categories-component>
  </div>
  <footer-component></footer-component>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CategoriesComponent from '@/components/CategoriesComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, CategoriesComponent, FooterComponent
  }
}
</script>

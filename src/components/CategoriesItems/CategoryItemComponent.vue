<template>
  <div class="col-4">
  <a class="" href="#">
  <div class="card" :class="{shadow: onFocus}" @mouseover="onFocus = true" @mouseleave="onFocus = false">
    <img class="card-img-top" :src="require(`../../assets/`+img)" alt="Card image cap">
    <div class="card-body">
      <div class="card-title">
        <h5 class="font-weight-bold">{{ name }}</h5>
      </div>
    </div>
  </div>
  </a>
</div>
</template>

<script>
export default {
  props: ['name', 'img'],
  data () {
    return {
      onFocus: false
    }
  }
}
</script>

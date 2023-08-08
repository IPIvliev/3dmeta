<template>
<div class="container mt-5">

  <h1>Test image</h1>
  <img :src="img">
  <input type="file" @change="handleFileUpload( $event )"/>
  <button class="btn btn-primary">Submit</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      img: null
    }
  },
  methods: {
    handleFileUpload( event ) {
      let file = event.target.files[0];
      this.img = URL.createObjectURL(file);
    }
  }
};
</script>

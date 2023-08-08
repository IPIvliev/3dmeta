<template>
  <div class="container" style="margin-top:100px;">
    <div class="row align-items-center" >
      <h1>This is an about page</h1>
    </div>
  </div>
      <iframe src='https://opensea.io/collection/cryptopython-v2?embed=true'
        width='100%'
        height='800px'
        frameborder='0'
        allowfullscreen></iframe>
</template>

<script>
export default {
  data () {
    return {
      text: 'Text'
    }
  },
  methods: {
    textChange () {
      if (this.text === 'Text') {
        this.text = 'Change'
      } else {
        this.text = 'Text'
      }
    }
  }
}
</script>

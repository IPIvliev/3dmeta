<template>
  <div class="row">
    <div class="col-12">
      <h1>New model</h1>
      <button class="btn btn-success" @click="mintModel">Mint new nodel</button>
      <hr>
      <div width="640" height="480" >
        <!-- <Renderer id="canvas" v-if="modelShow" ref="renderer" antialias orbit-ctrl :resize="false" width="640" height="480">
          <Camera :position="{ x: 0, y: 0, z: 350}" />
          <Scene background="#ddd" :position="{x: 0, y: 0, z: 0}">

<ambient-light color="#808080"></ambient-light>
      <point-light color="#ffffff" :position="{ y: 50, z: 0 }"></point-light>
      <point-light color="#ffffff" :position="{ y: -50, z: 0 }"></point-light>
      <point-light color="#ffffff" :position="{ y: 0, z: 0 }"></point-light>
            <Box ref="box" :rotation="{ y: Math.PI / 8, z: Math.PI / 8 }">
              <StandardMaterial />

            <FbxModel
    :src="modelFile"
/>
          </Scene>
        </Renderer> -->
      </div>
      <hr>
      <label>File
        <input type="file" @change="handleFileUpload( $event )" @click="upDate"/>
      </label>
      {{ modelFile }}
      <button @click="submitFile()">Submit</button>
      <hr>
      <button @click="snapshot">Image</button>
      <hr>
      <img :src="base64">
    </div>
  </div>
</template>

<script>
// import { ModelObj } from 'vue-3d-model';

import axios from 'axios'

export default {
  data() {
    return {
      file: '',
      modelShow: false,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      light: null,
      modelFile: '',
      base64: ''
    }
  },
  methods: {
    async mintModel() {
      await this.$store.dispatch("mintModel", {name: 'Name of the model', img: 'http'});
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post( '/upload',
          formData,
          {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      }).catch(function(){
        console.log('FAILURE!!');
      });
    },
    handleFileUpload(event) {
      
      this.file = event.target.files[0];
      this.modelFile = URL.createObjectURL(this.file);
      this.modelShow = true
    },
    upDate() {
      this.modelShow = false
    },
    snapshot() {
      let canvas = document.getElementById('canvas')
      console.log(canvas)
      this.base64 = canvas.toDataURL('image/png', 1);
    }
  },
  mounted() {
    //const renderer = this.$refs.renderer;
    //const box = this.$refs.box.mesh;

  },
}
</script>
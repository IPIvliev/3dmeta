<template>

    <div class="row mt-4 mb-3">
      <div class="col-12">
        <h2 class="font-weight-bold">Categories</h2>
      </div>
    </div>
    <div class="row mt-4 mb-3">
      <category-item-component
        v-for="category in categories"
        :key="category.id"
        :name="category.name"
        :img="category.img">
      </category-item-component>
    </div>
</template>

<script>
import CategoryItemComponent from './CategoriesItems/CategoryItemComponent.vue'
export default {
  data () {
    return {
      categories: [
        {
          name: 'First',
          img: 'bootstrap.png',
          id: 1
        },
        {
          name: 'Second',
          img: 'max.jpg',
          id: 2
        }
      ]
    }
  },
  components: { CategoryItemComponent }
}
</script>

<style scoped>
  a:hover, a:focus {
    text-decoration: none;
  }
</style>

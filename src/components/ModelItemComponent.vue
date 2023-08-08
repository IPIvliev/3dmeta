<template>
        <div class="row">
            <div class="col-12 mt-5">
                <h1>{{ model.name }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <img :src="model.image" style="width: 100%" alt="">
            </div>
            <div class="col-8">
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>
                            Title
                        </td>
                        <td>
                            {{ model.name }}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DNA
                        </td>
                        <td>
                            {{ model.dna }}
                        </td>
                    </tr>
                    <tr v-if="model.attributes.length > 5">
                        <td>
                            Downloadable
                        </td>
                        <td>
                            {{ model.attributes[5].trait_type }}
                        </td>
                    </tr>
                    <tr v-if="model.attributes.length > 6">
                        <td>
                            Downloadable
                        </td>
                        <td>
                            {{ model.attributes[6].value }}
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
</template>

<script>

export default ({
    props: ['modelId'],
    computed: {
        model() {
            return this.$store.state.models.find(e => (e.dna === this.modelId ))
        }
    }
})
</script>

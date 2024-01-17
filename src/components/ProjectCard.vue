<script>
import axios from 'axios';

export default {

    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {

        }
    },


} 
</script>

<template>
    <ul>
        <h3>
            <router-link :to="{ name: 'projects.show', params: { id: project.id } }">{{ project.name }}</router-link>
        </h3>
        <li>{{ project.admin }}</li>
        <p>{{ project.bio }}</p>
    </ul>
</template>

<style lang="scss">
@use '..//style/general.scss'
</style>
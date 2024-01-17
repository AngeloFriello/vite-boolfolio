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
    }

} 
</script>

<template>
    <ul>
        <li>
            <router-link :to="{ name: 'projects.show', params: { id: projectId } }">nome articolo</router-link>
        </li>
        <li>{{ project.admin }}</li>
        <li>{{ project.bio }}</li>
    </ul>
</template>

<style lang="scss"></style>
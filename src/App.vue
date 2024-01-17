<script>
import ProjectIndex from './pages/projects/Index.vue';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {

    components: {
        ProjectIndex,
        AppHeader,
    },

    data() {
        return {

        }
    }
} 
</script>

<template>
    <header>
        <AppHeader/>

        <router-view>
        </router-view>
       
    </header>
</template>

<style></style>

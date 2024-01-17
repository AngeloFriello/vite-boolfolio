<script>
import ProjectIndex from './pages/projects/Index.vue';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import FooterApp from './components/FooterApp.vue';

export default {

    components: {
        ProjectIndex,
        AppHeader,
        FooterApp
    },

    data() {
        return {

        }
    }
} 
</script>

<template>
    <AppHeader/>
    <router-view>
    </router-view>
    <FooterApp/>
</template>

<style></style>

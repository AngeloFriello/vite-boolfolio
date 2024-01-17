<script>
import axios from 'axios';
import Card from '../../components/ProjectCard.vue';

export default {

    components: {
        Card,
    },

    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/api',
            projects: [],
        }
    },
    methods:{
        fetchProjects(){
            axios.get(this.baseURL + '/projects')
            .then((res)=>{
                console.log(res.data.results)
                this.projects = res.data.results
            })
        }
    },
    created() {
        this.fetchProjects()
    }
} 
</script>

<template>
    <div class="container">
        <div class="grid">
            <div class="card" v-for="project in projects" :kay="project.id">
                <Card :project="project" />
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    
</style>

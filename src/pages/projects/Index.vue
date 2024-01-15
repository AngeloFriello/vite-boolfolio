<script>
import axios from 'axios';

export default {

    components: {

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
                <ul>
                    <li>{{ project.admin }}</li>
                    <li>{{ project.bio }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    
</style>

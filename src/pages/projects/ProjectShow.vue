<script>
import axios from 'axios';

export default {
    props: {
        id: String,
    },
    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/api',
            project: null,

        }
    },
    methods: {
        fetchShow() {
            axios.get(`${this.baseURL}/projects/${this.id}`)
                .then(res => {
                    console.log(res.data.project);
                    this.project = res.data.project;
                }).catch((error) => {
                    console.log('post not found', error.response)

                    // if (error.response.status === 404) {
                    //     this.$router.push({ name: 'not-found' })
                    // }
                })
        }
    },
    created() {
        this.fetchShow();
    }
}

</script>

<template>
    <div class="container">
        <div v-if="project" class="show">
            <h2>Nome: {{ project.name }}</h2>
            <p>Descrizione: {{ project.bio }}</p>
            <h3>Capo Progetto: {{ project.admin }}</h3>
            <h4 v-if="project.type">Tipo Di Progetto: <h4>{{ project.type?.name }}</h4></h4>
            <ul>
                <li>Tecnologie:</li>
                <li v-for="technology in project.technologies" :key="technology.id">{{ technology?.name }}</li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/general.scss';
</style>
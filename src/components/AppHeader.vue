<script>


export default {
    mounted() {
        console.log('app header montato')
    },
    unmounted() {
        console.log('app header unmounted')
    }
}

</script>

<template>
    <div class="container">
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'projects.index' }">Lista progetti</router-link>
            </li>
        </ul>
    </div>
</template>

<style></style>
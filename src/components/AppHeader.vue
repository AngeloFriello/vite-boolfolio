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
    <header>
        <div class="container flex">
            <ul class="row flex">
                <li class="btn">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="btn">
                    <router-link :to="{ name: 'projects.index' }">Lista progetti</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
@use '..//style/general.scss'
</style>
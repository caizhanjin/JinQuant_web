<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
@import "./assets/css/common.css";

#app {
    background: rgb(242, 242, 242);
    width: 100%;
    height: 100%;
}
</style>

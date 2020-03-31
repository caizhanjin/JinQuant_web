<template>
<div class="not_found line_middle">
    <div class="not_found_top font_bold">404</div>
    <div class="not_found_tips">您访问的路径不存在...</div>
</div>
</template>

<script>
export default {
    name: "404",
    created() {
    },
    methods: {
    }
}
</script>

<style>
.not_found {
    padding-top: 14%;
}

.not_found_top{
    font-size: 160px;
}

.not_found_tips{
    font-size: 24px;
}
</style>

<template>
    <div id="hello">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'hello vue'
            }
        },
    }
</script>

<style scoped lang="scss">
    
#hello {
    h2 {
        padding: 20px 0;
        text-align: center;
        background-color: #ccc;
        box-shadow: 0 0 0 2px #ccc;
    }
}
</style>

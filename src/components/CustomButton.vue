<template>
    <div>
        <button v-on:click="decrement">-</button>
        <label>count: {{count}}</label>
        <button v-on:click="increment">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },

    methods: {
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
}

</script>

<style scoped>
button {
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #bb0d38a8;
}
</style>
<template>
    <section>
        <form @submit.prevent="submitData">
            <p><input type="text" id="username" placeholder="your name" v-model="enteredName"></p>
            <p><input type="text" id="age" placeholder="your age" v-model="enteredAge"></p>
            <button>Set User Data</button>
        </form>
    </section>
</template>

<script>
    export default {
        emits: ['set-data'],
        data() {
            return{
                enteredName: '',
                enteredAge: ''
            }
        },
        methods: {
            submitData(){
                this.$emit('set-data', this.enteredName, this.enteredAge)
            },
        }
    }
</script>
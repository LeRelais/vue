Vue.createApp({
    data(){
        return {
            keydownString: '',
            enterConfirmed: '',
        }
    },
    methods: {
        showAlert(){
            alert("Hi")
        },
        updateOnKeydown(event){
            this.keydownString = event.target.value
        },
        updateOnEnter(event){
            this.enterConfirmed = event.target.value
        }
    }
}).mount('#assignment')
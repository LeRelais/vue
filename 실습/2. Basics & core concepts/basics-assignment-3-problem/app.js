Vue.createApp({
    data(){
        return{
            result: 0
        }
    },
    watch: {
        result(value) {
            if (value > 0) {
                setTimeout(() => {
                    this.result = 0;
                }, 5000);
            }
            
        }
    },
    methods: {
        addFive(){
            this.result += 5
        },
        addOne(){
            this.result += 1
        }
    }
}).mount('#assignment')
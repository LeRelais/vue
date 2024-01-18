Vue.createApp({
    data(){
        return{
            name: 'hyeonjun',
            age: '25',
            url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
            sometext: 'wjwioejgwoiegweg'
        }
    },
    methods: {
        generaterand(){
            return Math.random()
        },
    }
}).mount('#assignment')
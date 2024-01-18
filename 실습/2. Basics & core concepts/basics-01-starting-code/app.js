const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h3>Master Vue and build amazing Apps!</h3>',
            vueLink: 'https://elsword.nexon.com/Main/Index'
        }
    },
    methods: {
        outputGoal(){
            const randomNum = Math.random()
            if(randomNum < 0.5){
                return this.courseGoalA
            }
            else
                return this.courseGoalB
        }
    }
})

app.mount('#user-goal')
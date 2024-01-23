Vue.createApp({
    data(){
        return{
            assignmentValue: '',
            tasks: [],
            showTask: true,
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.assignmentValue)
            this.assignmentValue = ''
        },
        toggleShowTask(){
            this.showTask = !this.showTask
        }
    }
}).mount('#assignment')
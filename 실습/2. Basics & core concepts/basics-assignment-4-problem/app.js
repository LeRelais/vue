Vue.createApp({
    data(){
        return{
            classInput: '',
            user1Selected: false,
            user2Selected: false,
            visibleP: true,
            inputBGColor : ''
        }
    },
    methods: {
        updateClassInput(event){
            this.classInput = event.target.value
            //console.log(this.classInput)
            if(this.classInput === 'user1'){
                this.user1Selected = !this.user1Selected
            }
            else if(this.classInput === 'user2'){
                this.user2Selected = !this.user2Selected
            }
        },
        toggleParagraph(){
            this.visibleP = !this.visibleP;
        },
        updateBGColor(event){
            this.inputBGColor = event.target.value
        }
    }
}).mount('#assignment')
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods:{
    outputFullname(){
      if(this.name != '')
        return this.name + ' ' + 'Nam'
    },
    resetInput(){
      this.name = ''
    },
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(event){
    },
    addCounter(){
        this.counter += 1
    },
    reduceCounter(){
        this.counter -= 1
    },
    updateName(event){
        this.name = event.target.value
    }
  }
});

app.mount('#events');

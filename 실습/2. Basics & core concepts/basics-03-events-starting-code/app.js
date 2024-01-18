const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods:{
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

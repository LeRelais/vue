Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app')

// const button = document.querySelector('button')
// const input = document.querySelector('input')
// const list = document.querySelector('ul')

// function addGoal(){
//     const inputValue = input.value;
//     const el = document.createElement('li')
//     el.textContent = inputValue
//     list.appendChild(el)
// }

// button.addEventListener('click', addGoal)
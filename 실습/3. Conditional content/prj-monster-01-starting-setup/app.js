function calculateDamage(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    methods: {
        attackMonster(){
            const playerDmg = calculateDamage(5,12)
            this.monsterHealth -= playerDmg
            this.attackPlayer()
            console.log(this.playerHealth, this.monsterHealth)
        },
        attackPlayer(){
            const monsterDmg = calculateDamage(8,15)
            this.playerHealth -= monsterDmg
        }
    }
}).mount('#game')
function calculateValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            roundCount: 1,
            winner: null,
            battlelog: [],
        }
    },
    computed:{
        monsterBarStyle(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'}
        },
        disableSpecialAttack(){
            return this.roundCount % 3 !== 0
        }

    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'player'
            }
        }
    },
    methods: {
        attackMonster(){
            this.roundCount += 1
            //console.log(this.roundCount)
            const playerDmg = calculateValue(5,12)
            if(this.monsterHealth - playerDmg <= 0)
                this.monsterHealth = 0
            else
                this.monsterHealth -= playerDmg
            this.addLogMessage('player', 'attack', playerDmg)
            this.attackPlayer()
            //console.log(this.playerHealth, this.monsterHealth)
        },
        attackPlayer(){
            const monsterDmg = calculateValue(8,15)
            if(this.playerHealth - monsterDmg <= 0)
                this.playerHealth = 0
            else
                this.playerHealth -= monsterDmg
            this.addLogMessage('monster', 'attack', monsterDmg)
        },
        specialAttack(){
            this.roundCount += 1
            //console.log(this.roundCount)
            const playerDmg = calculateValue(10,25)
            if(this.monsterHealth - playerDmg <= 0)
                this.monsterHealth = 0
            else
                this.monsterHealth -= playerDmg
            this.addLogMessage('player', 'special-attack', playerDmg)
            this.attackPlayer()
        },
        healPlayer(){
            this.roundCount += 1
            const healValue = calculateValue(8, 20)
            if(this.playerHealth + healValue > 100)
                this.playerHealth = 100
            else
                this.playerHealth += healValue
            this.addLogMessage('player', 'heal', healValue)
            console.log(this.playerHealth)
            this.attackPlayer()
        },
        surrender(){
            this.winner = 'monster'
            this.playerHealth = 0
        },
        restart(){
            this.roundCount = 1
            this.playerHealth = 100
            this.monsterHealth = 100
            this.winner = null
            this.battlelog = []
        },
        addLogMessage(character, what, value){
            this.battlelog.unshift({
                actionBy: character,
                actionType: what,
                actionValue: value
            })
        }
    }
}).mount('#game')
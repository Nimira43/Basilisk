function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      basiliskHealth: 100,
      currentRound: 0
    }
  },
  computed: {
    basiliskBarStyles() {
      return { width: this.basiliskHealth + '%'}
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%'}
    }
  },
  methods: {
    attackBasilisk() {
      this.currentRound++
      const attackValue = getRandomValue(5, 12)
      this.basiliskHealth -= attackValue
      this.attackPlayer()
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15) 
      this.playerHealth -= attackValue
    },
    specialAttackBasilisk() {
      this.currentRound++
      const attackValue = getRandomValue(10, 25)
      this.basiliskHealth -= attackValue
      this.attackPlayer()
    }
  }
})

app.mount('#game')
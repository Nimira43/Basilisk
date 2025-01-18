function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 200,
      basiliskHealth: 1000
    }
  },
  methods: {
    attackBasilisk() {
      const attackValue = getRandomValue(5, 12)
      this.basiliskHealth -= attackValue
    },
    attackPlayer() {
      const attackValue = getRandomRandom(8, 15) 
      this.playerHealth -= attackValue
    }
  }
})

app.mount('#game')
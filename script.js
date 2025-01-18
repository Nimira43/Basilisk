const app = Vue.createApp({
  data() {
    return {
      playerHealth: 200,
      basiliskHealth: 1000
    }
  },
  methods: {
    attackBasilisk() {
      const attackValue = Math.floor(Math.random() * (60 - 25)) + 25
    }
  }
})

app.mount('#game')
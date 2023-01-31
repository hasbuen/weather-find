<template>
<v-container>
    <v-responsive class="d-flex fill-height">

      <v-card color="secondary" class="mx-auto" v-if="weatherData" elevation="7">

    <v-card-item>{{ city }}</v-card-item>
    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h2"
          cols="8"
        >
          {{ weatherData.main.temp }}&deg;C

        </v-col>

        <v-col cols="6" class="text-right">

        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
        <v-list-item-subtitle>{{ weatherData.wind.speed }} m/s</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-pouring"
      >
        <v-list-item-subtitle>{{ weatherData.weather[0].description }} {{ weatherData.main.humidity }}%</v-list-item-subtitle>
      </v-list-item>
    </div>

  </v-card>

   <v-card-text class="d-flex align-bottom justify-center">

        <v-text-field
        v-model='city'
        density="compact"
        variant="solo"
        label="Obter previsão em..."
        append-inner-icon="mdi-magnify"
        single-line
        @click:append-inner="getWeather"
      />

</v-card-text>

</v-responsive>
  </v-container>

</template>

<script>
import axios from 'axios'

export default {
  name: "Previsao",

  data () {
    return {
      city: '',
      weatherData: null,
    }
  },
  mounted () {
    this.getWeather()
    this.interval = setInterval(() => {
      this.getWeather()
    console.log('atualizou')
    }, 15 * 60 * 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },

 //https://api.openweathermap.org/data/2.5/weather?q=cascavel&units=metric&appid=9a41f4ca472bb1a3ecf1237712d0a7ad&lang=pt_br
  methods: {
    async getWeather () {
      const API_KEY = '9a41f4ca472bb1a3ecf1237712d0a7ad'
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${API_KEY}&lang=pt_br`
      try {
        const response = await axios.get(API_URL)
        this.weatherData = response.data
      } catch (error) {
        console.error(error)
      }
    },

  }
}
</script>

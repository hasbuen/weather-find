<template>
  <v-container>
    <transition name="fade">
      <v-card
        class="rounded-xl"
        color="primary"
        v-if="weatherData"
        elevation="7"
        align="center"
      >
        <v-card-item class="text-uppercase">{{ city }}</v-card-item>

        <v-card-text align="center">
          <v-row>
            <v-col class="text-h4" cols="12">
              <v-img
                class="floating-image"
                :width="150"
                cover
                :src="`${image}`"
              ></v-img>
              {{ Math.round(weatherData.main.temp) }}&deg;C
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col class="text-h6" cols="12">
              {{ weatherData.weather[0].description }}
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-list-item class="w-100">
            <template v-slot:prepend>
              <div class="d-flex justify-self-end">
                <v-icon class="me-1" icon="mdi-weather-windy"></v-icon>
                <span class="subheading">
                  {{ weatherData.wind.speed }}Km/h
                </span>
              </div>
            </template>

            <v-list-item>
              <template v-slot:append>
                <div class="d-flex justify-self-end">
                  <v-icon class="me-1" icon="mdi-waves"></v-icon>
                  <span class="subheading">
                    {{ weatherData.main.humidity }}%
                  </span>
                </div>
              </template>
            </v-list-item>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </transition>
  </v-container>

  <v-footer app class="bg-primary">
    <v-text-field
      clearable
      v-model="city"
      density="comfortable"
      variant="solo"
      label="Obter previsão em..."
      prepend-icon="mdi-map-marker"
      append-inner-icon="mdi-magnify"
      single-line
      @click:append-inner="getWeather"
      @keyup.enter="getWeather"
    />
  </v-footer>
</template>

<script>
import axios from "axios";
import clear from "../assets/clear.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import cloud from "../assets/cloud.png";
import mist from "../assets/mist.png";

export default {
  name: "Previsao",

  data() {
    return {
      city: "",
      lang: "pt_br",
      image: "",
      weatherData: null,
      rain: rain,
      snow: snow,
      cloud: cloud,
      mist: mist,
    };
  },

  methods: {
    async getWeather() {
      if (!this.city) return;

      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${API_KEY}&lang=${this.lang}`;

      try {
        const response = await axios.get(API_URL);
        switch (response.data.weather[0].main) {
          case "Clear":
            this.image = clear;
            break;

          case "Rain":
            this.image = this.rain;
            break;

          case "Snow":
            this.image = this.snow;
            break;

          case "Clouds":
            this.image = this.cloud;
            break;

          case "Haze":
            this.image = this.mist;
            break;

          default:
            this.image = "";
        }

        this.weatherData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  watch: {
    city(newCityValue) {
      if (!newCityValue) {
        this.weatherData = null;
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 240s ease-in-out;
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  transform: transformY(-50%);
  opacity: -15;
}

.fade-enter-to,
.fade-leave {
  transform: transformY(90%);
  opacity: 0;
}

.floating-image {
  position: relative;
  animation: float 2.5s infinite;
  animation-direction: alternate;
}

@keyframes float {
  from {
    top: -1px;
  }
  to {
    top: -11px;
  }
}
</style>

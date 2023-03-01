<template>
  <v-app>
    <v-container>
      <v-row class="d-flex align-top justify-right">
        <v-col cols="auto">
          <v-switch
            elevation="7"
            inset
            v-model="modoEscuro"
            @change="defineTema()"
          >
          </v-switch>
        </v-col>
      </v-row>
    </v-container>

    <v-main>
      <Previsao />
    </v-main>
  </v-app>
</template>

<script setup>
import Previsao from "@/components/Previsao.vue";

import { ref } from "vue";
import { useTheme } from "vuetify";

const tema = useTheme();
const modoEscuro = ref(false);

const defineTema = () => {
  tema.global.name.value = modoEscuro.value ? "noite" : "dia";
};
</script>

<style></style>

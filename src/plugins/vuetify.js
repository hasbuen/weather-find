/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'


const noite = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#612BBA",
    error: "#ff5722",
  },
};

const dia = {
  dark: false,
  colors: {
    background: "#eee",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#00FFA4",
    error: "#ffcc00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      dia
    },
  },
});
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
    background: "#000",
    surface: "#15202b",
    primary: "#0B092F",
    secondary: "#612BBA",
    error: "#ff5722",
  },
};

const dia = {
  dark: false,
  colors: {
    background: "#CBEAFE",
    surface: "#15202b",
    primary: "#E4F4FF",
    secondary: "#00FFA4",
    error: "#ffcc00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "dia",
    themes: {
      dia,
      noite
    },
  },
});
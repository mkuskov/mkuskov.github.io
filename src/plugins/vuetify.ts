// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          white: '#ffffff',
          black: '#000000',
          'border-color': '#b3b3b3',
        }
      },
      darkTheme: {
        dark: true,
        colors: {
          white: '#121212',
          black: '#ffffff',
          'border-color': '#ffffff',
        }
      }
    }
  }
})
// Importar el método createApp de la versión esm-browser de Vue:
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Importar el componente hijo
import ComponenteUno from './components/componenteUno.js'

createApp({

  components: {
    // Declarar el componente hijo
    // No es necesario usar kebab-case: 'componente-hijo': ComponenteHijo
    // Vue hace la conversión automáticamente
    ComponenteUno
  },

  data: () => ({

    colorsData: ['red', 'blue', 'green']
  
  })

  // Al ser montado en '#app'
  // todo lo que esté dentro de createApp
  // está disponible dentro del <div> con id="app"
  // incluyendo la data (colorsData en este caso) 
  // y los componentes declarados (ComponenteUno, en este caso)
}).mount('#app')


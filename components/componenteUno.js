

export default {

  props: {
    colorsProp: Array
  },

  template: /*html*/ `
  
    <ul class="center">
      <li v-for="(color, i) in colorsProp" 
        :key="i"
        :style="{ color }"
        class="bold mb-1 p-1 border rounded"
      >
        {{ color }}
      </li>
    </ul>
  
  `
}
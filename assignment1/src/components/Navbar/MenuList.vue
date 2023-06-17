<script>
import CloseIcon from '../icons/CloseIcon.vue'
import { inject } from 'vue'

export default {
  setup() {
    const toggleMenu = inject('toggleMenu')

    return {
      toggleMenu
    }
  },
  props: ['isOpen'],
  components: {
    CloseIcon
  }
}
</script>

<template>
  <div v-if="isOpen" class="menu-list">
    <button @click="toggleMenu">
      <CloseIcon />
    </button>
    <ul>
      <li>
        <a href="#team"> Team </a>
      </li>
      <li>
        <a href="#our-work">Work</a>
      </li>
      <li>
        <a href="#">Price</a>
      </li>
      <li>
        <a href="#contact-us"> Contact</a>
      </li>
      <li>
        <a href="#">Dropdown</a>
      </li>
    </ul>
  </div>
</template>

<script>
import './Navbar.css'
import HomeIcon from '../icons/HomeIcon.vue'
import MenuIcon from '../icons/MenuIcon.vue'
import MagnifyIcon from '../icons/MagnifyIcon.vue'
import MenuList from './MenuList.vue'
import { ref, provide } from 'vue'

export default {
  setup() {
    const isOpen = ref(true)

    const handleScreenWidthChange = () => {
      if (window.innerWidth > 767) {
        isOpen.value = true
      } else {
        isOpen.value = false
      }
    }

    window.addEventListener('resize', handleScreenWidthChange)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    provide('toggleMenu', toggleMenu)

    return {
      isOpen,
      toggleMenu
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleScreenWidthChange)
  },
  components: {
    HomeIcon,
    MenuIcon,
    MagnifyIcon,
    MenuList
  }
}
</script>
<template>
  <nav>
    <a href="/" class="logo">
      <HomeIcon />
      Logo
    </a>
    <MenuList :isOpen="isOpen" />
    <button class="search">
      <MagnifyIcon />
    </button>
    <button class="menu-icon" @click="toggleMenu">
      <MenuIcon />
    </button>
  </nav>
</template>

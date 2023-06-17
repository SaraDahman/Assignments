<script>
import Navbar from './components/Navbar/Navbar.vue'
import Header from './components/Header/Header.vue'
import Team from './components/Team/Team.vue'
import OurWork from './components/OurWork/OurWork.vue'
import ContactUs from './components/ContactUs/ContactUs.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    Navbar,
    Header,
    Team,
    OurWork,
    ContactUs,
    Footer
  }
}
</script>

<template>
  <Navbar />
  <Header />

  <main>
    <Team />
    <OurWork />
    <ContactUs />
  </main>

  <Footer />
</template>

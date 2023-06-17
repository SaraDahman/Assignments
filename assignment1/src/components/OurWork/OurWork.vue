<script>
import WorkCard from './WorkCard.vue'
import workData from '../../constants/work'
import './OurWork.css'

export default {
  setup() {
    return {
      data: workData
    }
  },
  components: {
    WorkCard
  }
}
</script>

<template>
  <section id="our-work">
    <div class="work-intro">
      <h2>Our Work</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quos doloremque animi corrupti
        saepe facilis voluptatum blanditiis possimus soluta magni! Reiciendis, molestias ipsam.
        Praesentium perferendis similique omnis quaerat, fugiat soluta!
      </p>
    </div>
    <div class="work-cards">
      <div v-for="item in data" :key="item.id">
        <WorkCard :item="item" />
      </div>
    </div>
  </section>
</template>

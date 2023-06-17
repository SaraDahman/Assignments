<script>
import './Team.css'
import TeamCard from './TeamCard.vue'
import teamData from '../../constants/team.js'

export default {
  setup() {
    return {
      data: teamData
    }
  },
  components: {
    TeamCard
  }
}
</script>

<template>
  <section id="team">
    <div class="team-intro">
      <h2>Our Team</h2>
      <p>Meet our team - our office rats</p>
    </div>
    <div class="team-container">
      <div v-for="item in data" :key="item.id" class="team-card">
        <TeamCard :item="item" />
      </div>
    </div>
  </section>
</template>

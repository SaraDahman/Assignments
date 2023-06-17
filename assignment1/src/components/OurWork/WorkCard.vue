<script>
export default {
  props: ['item']
}
</script>

<template>
  <img :src="item.image" :alt="item.title" />
  <div class="work-content">
    <h3>{{ item.title }}</h3>
    <p>trade</p>
    <ul>
      <li>lorem</li>
      <li>lorem</li>
      <li>lorem</li>
      <li>lorem</li>
    </ul>
  </div>
</template>

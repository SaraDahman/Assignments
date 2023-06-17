<script>
export default {
  props: ['item']
}
</script>

<template>
  <img :src="item.image" :alt="item.name" />
  <p class="name">{{ item.name }}</p>
  <p class="title">{{ item.title }}</p>
</template>

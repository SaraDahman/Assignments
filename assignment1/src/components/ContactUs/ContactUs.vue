<script>
import './ContactUs.css'
import Form from './Form.vue'
export default {
  components: {
    Form
  }
}
</script>
<template>
  <section id="contact-us">
    <div class="contact-content">
      <h2>Contact Us</h2>
      <h3>Address</h3>
      <p>swing by for a cup of coffee, or whatever</p>
      <p>
        <span><i class="fa-solid fa-location-dot"></i></span>
        Amman, jordan
      </p>
      <p>
        <span><i class="fa-solid fa-phone"></i></span>
        +962970000000
      </p>
      <p>
        <span><i class="fa-solid fa-envelope"></i></span>
        test@test.com
      </p>
    </div>
    <Form />
  </section>
</template>

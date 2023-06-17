<template>
  <form>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="2" required></textarea>
    </div>
    <div class="form-submit">
      <div>
        <input type="checkbox" id="like" name="like" />
        <label for="like">I like it</label>
      </div>
      <button type="submit">Send</button>
    </div>
  </form>
</template>

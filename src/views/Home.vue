<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Astrothunder</h1>
      <p class="subtitle">Tu mejor amigo artificial ⚡️</p>
      <div>
        <chatbox />
        <chat-input />
      </div>
    </div>
  </section>
</template>

<script>
import Chatbox from '@/components/Chatbox.vue';
import ChatInput from '@/components/ChatInput.vue';
import { initializeSockets } from '@/api/sockets';

export default {
  name: 'Home',
  components: { Chatbox, ChatInput },
  created() {
    initializeSockets()
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

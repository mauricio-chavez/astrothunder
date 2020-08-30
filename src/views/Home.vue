<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Astrothunder</h1>
      <p class="subtitle">Tu mejor amigo artificial ⚡️</p>
      <div>
        <chatbox />
        <chat-input v-if="connected" />
        <b-button
          v-else
          type="is-dark"
          expanded
          @click="initializeSocket"
          :loading="loading"
        >
          Comenzar
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import Chatbox from '@/components/Chatbox.vue';
import ChatInput from '@/components/ChatInput.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: { Chatbox, ChatInput },
  computed: mapState(['connected', 'loading']),
  methods: mapActions(['initializeSocket']),
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

<template>
  <main class="chat" ref="chatbox">
    <p v-show="connected" class="has-text-white">Sé amable y comienza por saludar 👻</p>
    <transition-group name="slide" tag="div">
      <message v-for="m in messages" :key="m.id" :from="m.from">
        {{ m.text }}
      </message>
    </transition-group>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Message from '@/components/Message.vue';

export default {
  name: 'Chatbox',
  components: { Message },
  computed: mapState(['messages', 'connected']),
  watch: {
    messages() {
      const chatbox = this.$refs.chatbox;
      chatbox.scroll({
        top: chatbox.scrollHeight,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
main {
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

.chat {
  box-sizing: border-box;
  width: 60vw;
  height: 70vh;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  overflow-y: scroll;
  background: #0f0f0f;
}

@media screen and (max-width: 728px) {
  .chat {
    width: 85vw;
    height: 72vh;
  }
}
</style>

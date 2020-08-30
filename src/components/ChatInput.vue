<template>
  <form @submit.prevent="send">
    <b-field>
      <b-input v-model="message" expanded />
      <p class="control">
        <b-button type="is-dark" @click="send">Enviar</b-button>
      </p>
    </b-field>
  </form>
</template>

<script>
export default {
  name: 'ChatInput',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    send() {
      this.$store.dispatch('sendMessage', this.message);
      this.message = '';
    },
  },
};
</script>

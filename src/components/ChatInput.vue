<template>
  <form @submit.prevent="send">
    <b-field>
      <b-input v-model="message" :disabled="!connected" expanded />
      <p class="control">
        <b-button type="is-dark" @click="send" :disabled="!connected">
          Enviar
        </b-button>
      </p>
    </b-field>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ChatInput',
  data() {
    return {
      message: '',
    };
  },
  computed: mapState(['connected']),
  methods: {
    send() {
      this.$store.dispatch('sendMessage', this.message);
      this.message = '';
    },
  },
};
</script>

<style>
input:focus {
  border-color: #f0e13c !important;
  box-shadow: 0 0 0 0.125em rgba(210, 225, 49, 0.25) !important;
}
</style>

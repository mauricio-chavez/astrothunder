<template>
  <b-notification
    :closable="false"
    class="default"
    :class="from"
    :style="{ marginBottom: '15px' }"
  >
    <slot />
  </b-notification>
</template>

<script>
export default {
  name: 'Message',
  props: {
    from: {
      type: String,
      default: 'client',
      validator: function(from) {
        return ['client', 'server'].includes(from);
      },
    },
  },
};
</script>

<style scoped>
.default {
  display: flex;
  background: #f7ef92;
  font-weight: bold;
}

.client {
  justify-content: flex-end;
  margin-left: 40%;
  border-radius: 20px 20px 0 20px;
}

.server {
  justify-content: flex-start;
  margin-right: 40%;
  border-radius: 20px 20px 20px 0;
}
</style>

<template>
  <div class="user" :class="{ selected: selected }" @click="onClick">
    <div class="description">
      <div class="name">
        {{ user.username }} {{ user.self ? " (yourself)" : "" }}
      </div>
      <div class="status">
        <status-icon :connected="user.connected" />{{ status }}
      </div>
    </div>
    <div v-if="user.hasNewMessages" class="new-messages">
      !
    </div>
  </div>
</template>

<script>
import StatusIcon from './StatusIcon'
export default {
  name: 'UserA',
  components: { StatusIcon },
  props: {
    user: Object,
    selected: Boolean
  },
  computed: {
    status () {
      return this.user.connected ? 'online' : 'offline'
    }
  },
  methods: {
    onClick () {
      this.$emit('select')
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: #1164a3;
}

.user {
  padding: 10px;
}

.description {
  display: inline-block;
}

.status {
  color: #92959e;
}

.new-messages {
  color: white;
  background-color: red;
  width: 20px;
  border-radius: 5px;
  text-align: center;
  float: right;
  margin-top: 10px;
}
</style>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="edit-note">
    <h1>Edit Note with an id of: {{ route.params.id }}</h1>
  </div>
</template>

<style scoped></style>

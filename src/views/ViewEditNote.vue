<script setup lang="ts">
import { useRouter } from 'vue-router'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { ref } from 'vue'

const noteContent = ref('')
const router = useRouter()
</script>

<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bg-color="link"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #form-button>
        <button class="button is-link is-light" @click="router.back()">Cancel</button>
        <button class="button is-link has-background-link" :disabled="!noteContent">
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<style scoped></style>

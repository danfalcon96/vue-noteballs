<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes.ts'

const storeNotes = useStoreNotes()
const noteContent = ref('')
const router = useRouter()
const route = useRoute()

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id.toString(), noteContent.value)
  router.push('/')
}

noteContent.value = storeNotes.getNoteContent(route.params.id.toString())
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
        <button class="button is-link is-light mr-3" @click="router.back()">Cancel</button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="handleSaveClicked"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<style scoped></style>

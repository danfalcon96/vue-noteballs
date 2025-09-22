<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Note from '@/components/notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes.ts'
import AddEditNote from '@/components/notes/AddEditNote.vue'

const newNote = ref('')
const storeNotes = useStoreNotes()

const addEditNoteRef = useTemplateRef('addEditNoteRef')

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  if (addEditNoteRef.value) addEditNoteRef.value.focusTextArea()
}
</script>

<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #form-button>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">
          Add Note
        </button>
      </template>
    </AddEditNote>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note />
  </div>
</template>

<style scoped></style>

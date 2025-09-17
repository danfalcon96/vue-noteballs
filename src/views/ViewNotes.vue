<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Note from '@/components/notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes.ts'

const newNoteBox = useTemplateRef('new-note-box')
const newNote = ref('')
const storeNotes = useStoreNotes()

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  newNoteBox.value?.focus()
}
</script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote"
            ref="new-note-box"
            placeholder="Write a note here"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note />
  </div>
</template>

<style scoped></style>
